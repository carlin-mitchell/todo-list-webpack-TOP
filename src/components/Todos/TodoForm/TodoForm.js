import Element from "../../Element";
import PrioritySelector from "./PrioritySelector";
import TitleInput from "./TitleInput";

import AddButton from "./AddButton";

// DYNAMIC VARIABLES

// LINK STRINGS

// COMPONENT
const TodoForm = () => {
  const parentContainer = Element("form", {
    id: "todo-form",
    className: "",
  });

  parentContainer.appendChild(TitleInput());
  parentContainer.appendChild(PrioritySelector());
  parentContainer.appendChild(AddButton());

  return parentContainer;
};

export default TodoForm;
