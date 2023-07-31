import Element from "../../Element";
import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

function toggleTodoDetails(props) {
  const { detailsVisible, id } = props;
  const currentTodoObj = data.getProjectTodo(id);
  if (detailsVisible) {
    data.updateProjectTodo(
      { ...currentTodoObj, detailsVisible: !detailsVisible },
      id
    );
  } else {
    data.updateProjectTodo(
      { ...currentTodoObj, detailsVisible: !detailsVisible },
      id
    );
  }
  ui.refreshProjectTodos();
}

// COMPONENT
const TodoDetailsToggle = (props) => {
  const { detailsVisible, id } = props;
  const parentElement = Element("div", {
    innerText: `${detailsVisible ? "hide details" : "show details"}`,
    className: "toggle-text show-details",
    onclick: function () {
      toggleTodoDetails({ detailsVisible, id });
    },
  });
  return parentElement;
};

export default TodoDetailsToggle;
