import Element from "../../Element";
import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

function toggleTodoDetails(e, todo) {
  console.log(todo.detailsVisible);
  const { detailsVisible, id } = todo;
  const showText = "show details";
  const hideText = "hide details";
  if (detailsVisible) {
    // console.log(e.target.innerText);
    e.target.innerText = hideText;
    console.log(
      data.updateProjectTodo(
        { ...todo, detailsVisible: !detailsVisible, isNew: false },
        id
      )
    );
    ui.refreshProjectTodos();
  } else {
    // e.target.innerText = showText;
    console.log(
      data.updateProjectTodo(
        { ...todo, detailsVisible: !detailsVisible, isNew: false },
        id
      )
    );
    ui.refreshProjectTodos();
  }
}

// COMPONENT
const TodoDetailsToggle = (props) => {
  const todo = props;
  const parentElement = Element("div", {
    innerText: "show details",
    className: "toggle-text show-details",
    onclick: function (e) {
      toggleTodoDetails(e, todo);
    },
  });
  return parentElement;
};

export default TodoDetailsToggle;
