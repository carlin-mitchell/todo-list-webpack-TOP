import Element from "../Element";

import ProjectsListItem from "./ProjectsListItem";

import data from "../../managers/todoDataManager";

// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const ProjectsList = () => {
  const ul = Element("ul", {
    className: "projects-list",
  });

  const projectNames = data.getAllProjectNames();

  projectNames.forEach((name) => {
    ul.appendChild(ProjectsListItem(name));
  });

  return ul;
};

export default ProjectsList;
