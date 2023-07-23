import Element from "../../Element";

// DYNAMIC VARIABLES
const textAreaPlaceholder = "Todo details...";

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const DetailsInput = () => {
  const parentElement = Element("div", { id: "details-input" });
  const input = Element("textarea", {
    placeholder: textAreaPlaceholder,
  });
  parentElement.appendChild(input);
  return parentElement;
};

export default DetailsInput;
