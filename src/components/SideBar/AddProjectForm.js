import Element from "../Element";

import data from "../../managers/todoDataManager";
import ui from "../../managers/uiManager";

function addNewProject(e) {
  e.preventDefault();
  const newProjectInput = document.querySelector("#sidebar-input");
  const { value: newProjectName } = newProjectInput;

  data.addNewProjectName(newProjectName);
  ui.refreshCurrentProjects();
  ui.setProjectTitleToCurrent();
  ui.refreshProjectTodos();
  ui.setInputValue(newProjectInput, "");
}

// COMPONENT
const AddProjectForm = () => {
  const form = Element("form", {
    id: "add-project-form",
    className: "sidebar-item",
    onsubmit: function (e) {
      addNewProject(e);
    },
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
