import Element from "../../Element";

import ui from "../../../managers/uiManager";
// OPTIONS
const optionsText = ["", "!", "!!", "!!!"];

// COMPONENT
const PrioritySelector = () => {
  const parentContainer = Element("div", {
    className: "label",
    innerText: "Priority",
  });

  const select = Element("select", { id: "priority-selector" });

  const optionElements = optionsText.map((option) =>
    Element("option", {
      innerText: option,
      className: "priority-option",
    })
  );

  optionElements.forEach((option) => select.append(option));

  parentContainer.appendChild(select);
  ui.setSelectorElementValue(select, 0);
  return parentContainer;
};

export default PrioritySelector;
