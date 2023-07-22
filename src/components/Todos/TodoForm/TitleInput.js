import Element from "../../Element";

// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const TitleInput = () => {
  const parentElement = Element("div", {
    className: "label",
    innerText: "",
  });

  const input = Element("input", {
    type: "text",
    placeholder: "Task title",
  });

  parentElement.appendChild(input);

  return parentElement;
};

export default TitleInput;
