import Element from "../../Element";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

function editTodo(e) {
  e.preventDefault();

  const editFormContainer = document.querySelector(`#edit-form-container`);
  const editTitle = editFormContainer.querySelector("#edit-title");
  const editDeadline = editFormContainer.querySelector("#edit-deadline");
  const editPriority = editFormContainer.querySelector(
    "#edit-priority-selector"
  );
  const editDetails = editFormContainer.querySelector("#edit-details");
  const editFormHiddenInput = editFormContainer.querySelector(
    "#edit-form-hidden-input"
  );

  const { value: title } = editTitle;
  const { value: deadline } = editDeadline;
  const { value: priority } = editPriority;
  const { value: details } = editDetails;
  const { value: id } = editFormHiddenInput;

  const updateObj = {
    id: id,
    content: title,
    due: deadline,
    priority: priority.includes("!") ? priority : "",
    details,
  };

  data.updateProjectTodo(updateObj, id);
  ui.setInputValue(editTitle, "thisTodo.content");
  ui.setInputValue(editDeadline, "thisTodo.due");
  ui.setSelectorElementValue(editPriority, 0);
  ui.setInputValue(editDetails, "thisTodo.details");
  ui.setInputValue(editFormHiddenInput, "");
  ui.refreshProjectTodos();

  editFormContainer.classList.toggle("display-none");
}

// COMPONENT
const SubmitEditButton = () => {
  const button = Element("button", {
    innerText: "Submit Edit",
    onclick: function (e) {
      editTodo(e);
    },
  });
  return button;
};

export default SubmitEditButton;
