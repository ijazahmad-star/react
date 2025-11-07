import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handlAddTask(text) {
    setProjectState((preState) => {
      const taskid = Math.random();
      const newTask = {
        text: text,
        projectId: preState.selectedProjectId,
        id: taskid,
      };
      return {
        ...preState,
        tasks: [...preState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((preState) => {
      return {
        ...preState,
        tasks: preState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  function handlSelectedProject(id) {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: id,
      };
    });
  }
  function handleDeleteProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: preState.projects.filter(
          (p) => p.id !== preState.selectedProjectId
        ),
      };
    });
  }
  function handleStartAddProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectDate) {
    setProjectState((preState) => {
      const projectid = Math.random();
      const newProject = {
        ...projectDate,
        id: projectid,
      };
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: [...preState.projects, newProject],
      };
    });
  }
  // console.log(projectState);
  const selectProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectProject}
      onDelete={handleDeleteProject}
      onAddTask={handlAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handlSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
