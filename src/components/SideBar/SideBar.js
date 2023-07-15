import Element from "../Element";

// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS
window.onresize = (e) => {
  const { innerWidth } = e.target;
  if (innerWidth >= 800) {
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

  const placeholder = Element("div", {
    className: "placeholder",
    innerText:
      "This will be a menu one day. Click the menu button (if visible) to hide/show it.",
  });

  parentContainer.appendChild(placeholder);

  return parentContainer;
};

export default SideBar;
