import Element from "../Element";

import { capitalize } from "../../utils";

import ui from "../../managers/uiManager";
import data from "../../managers/todoDataManager";

// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const ProjectsListItem = (props) => {
  const { name, current, id } = props;
  const li = Element("li", {
    id: id,
    className: `projects-list-item ${current ? "current-project" : ""}`,
    onclick: function () {
      data.setCurrentProjectName(id);
      ui.setProjectTitleToCurrent();
      ui.refreshCurrentProjects();
      ui.refreshProjectTodos();
    },
  });

  const div = Element("div", { innerText: capitalize(name) });

  li.appendChild(div);
  return li;
};

export default ProjectsListItem;
