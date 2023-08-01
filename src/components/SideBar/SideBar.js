import Element from "../Element";

import ProjectsList from "./ProjectsList";
import AddProjectForm from "./AddProjectForm";

// ANIMATION METHODS

// Push menu to the side when the widow is wider than the threshold
// window.onresize = (e) => {
//   const { innerWidth } = e.target;
//   if (innerWidth >= 800) {
//     const sideBar = document.querySelector("#side-bar");
//     sideBar.className = "visible";
//   }
// };

// COMPONENT
const SideBar = () => {
  const parentContainer = Element("div", {
    id: "side-bar",
    className: `${window.innerWidth >= 800 ? "visible" : "hidden"}`,
  });

  const projectsHeader = Element("div", {
    className: "placeholder",
    innerText: "Projects",
  });
  parentContainer.appendChild(AddProjectForm());
  parentContainer.appendChild(projectsHeader);
  parentContainer.appendChild(ProjectsList());

  return parentContainer;
};

export default SideBar;
