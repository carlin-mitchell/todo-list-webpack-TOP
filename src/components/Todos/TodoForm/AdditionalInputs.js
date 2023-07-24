import Element from "../../Element";
import ui from "../../../managers/uiManager";

function toggleAdditionalInputs() {
  const formIsExpanded = ui.getFormIsExpanded();
  const details = document.querySelector("#details-input");
  const prioritySelector = document.querySelector("#priority-selector");
  if (formIsExpanded) {
    this.innerText = "add details/priority -";
    prioritySelector.classList.remove("display-none");
    details.classList.remove("display-none");
    console.log(details, prioritySelector);
  } else {
    this.innerText = "add details/priority +";
    console.log(details, prioritySelector);
    prioritySelector.classList.add("display-none");
    details.classList.add("display-none");
  }

  ui.setFormIsExpanded(!formIsExpanded);
}

// COMPONENT
const ShowHideAdditionalInputsButton = () => {
  const parentElement = Element("div", {
    innerText: "add details/priority +",
    className: "toggle-text",
    onclick: toggleAdditionalInputs,
  });
  return parentElement;
};

export default ShowHideAdditionalInputsButton;
