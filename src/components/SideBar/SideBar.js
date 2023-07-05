import Element from "../Element";

// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS
window.onresize = (e) => {
  const { innerWidth } = e.target;
  if (innerWidth <= 800) {
    const sideBar = document.querySelector("#side-bar");
    sideBar.className = "visible";
  }
};

// COMPONENT
const SideBar = () => {
  const parentContainer = Element("div", {
    id: "side-bar",
    className: "visible",
  });
  return parentContainer;
};

export default SideBar;
