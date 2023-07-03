import Element from "../../Element";

// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS

// COMPONENT
const SiteTitle = () => {
  const parentContainer = Element("div", {
    id: "site-title",
    innerText: "To-Do-List",
  });
  return parentContainer;
};

export default SiteTitle;
