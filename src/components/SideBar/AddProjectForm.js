import Element from "../Element";

import data from "../../managers/todoDataManager";
import ui from "../../managers/uiManager";

function addNewProject() {
  const newProjectInput = document.querySelector("#sidebar-input");
  const { value: newProjectName } = newProjectInput;

  data.addNewProjectName(newProjectName);
  ui.refreshCurrentProjects();
  ui.setInputValue(newProjectInput, "");
}

// COMPONENT
const AddProjectForm = () => {
  const form = Element("form", {
    id: "add-project-form",
    className: "sidebar-item",
    onsubmit: addNewProject,
  });

  const input = Element("input", {
    type: "text",
    placeholder: "Add a new project",
    className: "sidebar-item",
    id: "sidebar-input",
  });
  form.appendChild(input);
  return form;
};

export default AddProjectForm;
