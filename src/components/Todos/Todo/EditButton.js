import Element from "../../Element";
import PencilGray9 from "../assets/edit-pencil-gray.svg";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

function editTodo(id) {
  const thisTodo = data.getProjectTodo(id);
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

  ui.setInputValue(editTitle, thisTodo.content);
  ui.setInputValue(editDeadline, thisTodo.due);
  ui.setSelectorElementValue(editPriority, thisTodo.priority.length);
  ui.setInputValue(editDetails, thisTodo.details);
  ui.setInputValue(editFormHiddenInput, id);

  editFormContainer.classList.toggle("display-none");
}

// COMPONENT
const EditButton = (props) => {
  const { id } = props;
  const button = Element("button", {
    onclick: function () {
      editTodo(id);
    },
  });

  const pencil = Element("img", {
    src: PencilGray9,
    className: `button`,
  });
  button.appendChild(pencil);
  return button;
};

export default EditButton;
