import Element from "../../Element";
import PencilGray9 from "../assets/edit-pencil-gray.svg";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

function editTodo(id) {
  const editFormContainer = document.querySelector(`#edit-form-container`);

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
