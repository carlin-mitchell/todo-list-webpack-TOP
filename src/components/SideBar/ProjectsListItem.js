import Element from "../Element";

import { capitalize } from "../../utils";

import ui from "../../managers/uiManager";
import data from "../../managers/todoDataManager";

import PlusSignGray9 from "./assets/plus-sign-gray-9.png";

function deleteProject(id) {
  data.deleteProject(id);
  data.deleteAllProjectTodos(id);
  data.setCurrentProjectName("all-projects");
  ui.refreshCurrentProjects();
  ui.refreshProjectTodos();
  ui.setProjectTitleToCurrent();
}

// COMPONENT
const ProjectsListItem = (props) => {
  const { name, current, id } = props;
  const li = Element("li", {
    id: id,
    className: `projects-list-item ${current ? "current-project" : ""}`,
  });

  const div = Element("div", {
    innerText: capitalize(name),
    onclick: function () {
      data.setCurrentProjectName(id);
      ui.setProjectTitleToCurrent();
      ui.refreshCurrentProjects();
      ui.refreshProjectTodos();
    },
  });

  const img = Element("img", {
    src: PlusSignGray9,
    className: "delete-project button rotated45",
  });

  const button = Element("button", {
    className: "delete-project-button",
    onclick: function () {
      deleteProject(id);
    },
  });

  button.appendChild(img);

  li.appendChild(div);
  if (id !== "all-projects") {
    li.appendChild(button);
  }

  return li;
};

export default ProjectsListItem;
