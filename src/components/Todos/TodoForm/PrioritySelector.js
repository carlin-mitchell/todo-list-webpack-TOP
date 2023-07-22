import Element from "../../Element";

import ui from "../../../managers/uiManager";
// OPTIONS
const optionsText = ["Priority", "!", "!!", "!!!"];

// COMPONENT
const PrioritySelector = () => {
  const parentContainer = Element("div", {
    className: "label",
    innerText: "",
  });

  const select = Element("select", {
    id: "priority-selector",
  });

  const optionElements = optionsText.map((option, i) =>
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
