import Element from "../Element";

import data, { getCurrentProjectName } from "../../managers/todoDataManager";

import { capitalize } from "../../utils";

// COMPONENT
const ProjectTitle = () => {
  const parentElement = Element("div", {
    innerText: capitalize(data.getCurrentProjectName().name),
    className: "project-title",
  });

  return parentElement;
};

export default ProjectTitle;
