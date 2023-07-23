import Element from "../../Element";

import PlusSignGray9 from "../assets/plus-sign-gray-9.svg";

import ui, {
  hideDateTimeInput,
  showDateTimeInput,
} from "../../../managers/uiManager";

// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const DueDateAndTimeInput = () => {
  const parentElement = Element("div", { id: "dateTimeComponent-wrapper" });

  const dateTimeHide = Element(
    "button",
    {
      id: "datetime-hide",
      onclick: function (e) {
        e.preventDefault();
        hideDateTimeInput();
      },
    },
    Element("img", { src: PlusSignGray9 })
  );
  const dateTimeInput = Element("input", {
    type: "datetime-local",
    value: "",
  });

  const label = Element("div", {
    innerText: "add deadline",
    id: "deadline-prompt",
    onclick: function () {
      showDateTimeInput();
    },
  });

  const dateTimeWrapper = Element(
    "div",
    { id: "dateTimeInput-wrapper", className: "display-none" },
    [dateTimeInput, dateTimeHide]
  );

  parentElement.appendChild(dateTimeWrapper);
  parentElement.appendChild(label);
  return parentElement;
};

export default DueDateAndTimeInput;
