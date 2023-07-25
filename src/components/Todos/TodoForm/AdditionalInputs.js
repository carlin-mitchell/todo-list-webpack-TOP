import Element from "../../Element";
import ui from "../../../managers/uiManager";

function toggleAdditionalInputs() {
  const formIsExpanded = ui.getFormIsExpanded();
  const formRow3 = document.querySelector("#form-row-3");
  const baseText = this.innerText.slice(0, -1);
  console.log(formIsExpanded);
  if (formIsExpanded) {
    this.innerText = `${baseText} +`;
    formRow3.classList.toggle("display-none");
  } else {
    this.innerText = `${baseText} -`;
    formRow3.classList.toggle("display-grid");
    formRow3.classList.toggle("display-none");
  }

  ui.setFormIsExpanded(!formIsExpanded);
}

// COMPONENT
const ShowHideAdditionalInputsButton = () => {
  const parentElement = Element("div", {
    innerText: "add details & priority +",
    className: "toggle-text",
    onclick: toggleAdditionalInputs,
  });
  return parentElement;
};

export default ShowHideAdditionalInputsButton;
