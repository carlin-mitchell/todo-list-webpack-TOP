import Element from "../../Element";

// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const TitleInput = () => {
  const parentElement = Element("div", {
    className: "label",
    innerText: "Title",
  });

  const input = Element("input", {
    type: "text",
  });

  parentElement.appendChild(input);

  return parentElement;
};

export default TitleInput;
