import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectProjectId: undefined,
    projects: []
  });

  return (
    <main className="n-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
