import Element from "../../Element";
import PrioritySelector from "./PrioritySelector";
import TitleInput from "./TitleInput";
import DueDateAndTimeInput from "./DueDateAndTime";
import DetailsInput from "./DetailsInput";

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
  parentContainer.appendChild(DueDateAndTimeInput());
  parentContainer.appendChild(AddButton());
  parentContainer.appendChild(DetailsInput());
  parentContainer.appendChild(PrioritySelector());

  return parentContainer;
};

export default TodoForm;
