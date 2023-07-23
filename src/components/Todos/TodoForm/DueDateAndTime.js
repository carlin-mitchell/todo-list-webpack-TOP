import Element from "../../Element";

import PlusSignGray9 from "../assets/plus-sign-gray-9.svg";

// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const DueDateAndTimeInput = () => {
  const parentElement = Element("div", { innerText: "" });

  const dateTimeHide = Element(
    "button",
    {
      id: "datetime-hide",
    },
    Element("img", { src: PlusSignGray9 })
  );
  const dateTimeInput = Element("input", {
    type: "datetime-local",
  });

  const dateTimeWrapper = Element("div", { id: "dateTime-wrapper" }, [
    dateTimeInput,
    dateTimeHide,
  ]);

  const label = Element("div", {
    innerText: "add deadline",
  });

  parentElement.appendChild(dateTimeWrapper);
  return parentElement;
};

export default DueDateAndTimeInput;
