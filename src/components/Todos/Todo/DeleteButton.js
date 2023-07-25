import Element from "../../Element";
import PlusSignGray9 from "../assets/plus-sign-gray-9.svg";
import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS
function deleteTodo(todoId) {
  data.removeTodoFromProject(todoId);
  ui.refreshProjectTodos();
}

// COMPONENT
const DeleteButton = (props) => {
  const { isNew, id } = props;
  const button = Element("button", {
    onclick: function () {
      deleteTodo(id);
    },
  });

  const plusSign = Element("img", {
    src: PlusSignGray9,
    // add the animation if the todo is new, have it enter rotated already if not
    className: `delete button ${isNew ? "rotate45" : "rotated45"}`,
  });
  button.appendChild(plusSign);
  return button;
};

export default DeleteButton;
