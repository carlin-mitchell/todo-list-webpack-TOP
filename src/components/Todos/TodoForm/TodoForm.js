import Element from "../../Element";
import PrioritySelector from "./PrioritySelector";
import TitleInput from "./TitleInput";

import ShowHideAdditionalInputsButton from "./AdditionalInputs";
import DueDateAndTimeInput from "./DueDateAndTime";
import DetailsInput from "./DetailsInput";

import AddButton from "./AddButton";

import ui from "../../../managers/uiManager";

import FormRow from "./FormRow";
// DYNAMIC VARIABLES

// LINK STRINGS

// COMPONENT
const TodoForm = () => {
  const form = Element("form", {
    id: "todo-form",
    className: "",
  });

  const formRow1 = Element("div", { className: "form-row", id: "form-row-1" });
  formRow1.appendChild(TitleInput());
  formRow1.appendChild(DueDateAndTimeInput());
  formRow1.appendChild(AddButton());

  const formRow2 = Element("div", { className: "form-row", id: "form-row-2" });
  formRow2.appendChild(ShowHideAdditionalInputsButton());

  const formRow3 = Element("div", {
    className: `form-row ${ui.getFormIsExpanded() ? "" : "display-none"}`,
    id: "form-row-3",
  });
  formRow3.appendChild(DetailsInput());
  formRow3.appendChild(PrioritySelector());

  form.appendChild(formRow1);
  form.appendChild(formRow2);
  form.appendChild(formRow3);

  // parentContainer.appendChild(TitleInput());
  // parentContainer.appendChild(DueDateAndTimeInput());
  // parentContainer.appendChild(AddButton());
  // parentContainer.appendChild(ShowHideAdditionalInputsButton());
  // parentContainer.appendChild(DetailsInput());
  // parentContainer.appendChild(PrioritySelector());

  return form;
};

export default TodoForm;
