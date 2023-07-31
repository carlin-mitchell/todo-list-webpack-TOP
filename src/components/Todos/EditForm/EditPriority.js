import Element from "../../Element";

import ui from "../../../managers/uiManager";
// OPTIONS
const optionsText = ["Priority", "!", "!!", "!!!"];

// COMPONENT

const EditPrioritySelector = () => {
  const label = Element("div", {
    className: "label",
    innerText: "Priority",
  });

  const select = Element("select", {
    className: ``,
    id: `edit-priority-selector`,
  });

  const optionElements = optionsText.map((option, i) =>
    Element("option", {
      innerText: option,
      className: `priority-option `,
    })
  );

  optionElements.forEach((option) => select.append(option));

  label.appendChild(select);
  ui.setSelectorElementValue(select, 0);
  return label;
};

export default EditPrioritySelector;
