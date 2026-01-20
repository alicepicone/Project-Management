import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectProjectId: null
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject =  {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        selectProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  let content;

  if (projectsState.selectProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="n-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects} 
      />
      {content}
    </main>
  );
}

export default App;
