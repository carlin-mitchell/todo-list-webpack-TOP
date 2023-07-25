import Element from "../../Element";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

function toggleTodoCompletion(value, todoId) {
  data.updateProjectTodo({ completed: value }, todoId);
  ui.refreshProjectTodos();
}

// COMPONENT
const Checkbox = (props) => {
  const { completed, id, priority } = props;

  const checkbox = Element("button", {
    innerText: `${completed ? "✓" : priority}`,
    className: `checkbox ${completed ? "checked" : "unchecked"}`,
    onclick: function () {
      toggleTodoCompletion(!completed, id);
    },
  });
  return checkbox;
};

export default Checkbox;
