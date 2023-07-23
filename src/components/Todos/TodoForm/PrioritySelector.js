import Element from "../../Element";

import ui from "../../../managers/uiManager";
// OPTIONS
const optionsText = ["Priority", "!", "!!", "!!!"];

// COMPONENT
const PrioritySelector = () => {
  const parentContainer = Element("div", {
    className: "label",
    innerText: "",
    id: "priority-selector",
  });

  const select = Element("select", {});

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
