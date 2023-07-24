import Element from "../../Element";

import ui from "../../../managers/uiManager";

// DYNAMIC VARIABLES
const textAreaPlaceholder = "Todo details...";

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const DetailsInput = () => {
  const parentElement = Element("div", { id: "details-input" });
  const input = Element("textarea", {
    placeholder: textAreaPlaceholder,
    className: `${ui.getFormIsExpanded() ? "" : "display-none"}`,
    id: "details-input",
  });
  parentElement.appendChild(input);
  return parentElement;
};

export default DetailsInput;
