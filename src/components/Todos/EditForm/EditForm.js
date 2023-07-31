import Element from "../../Element";

import EditTitle from "./EditTitle";
import EditDeadline from "./EditDeadline";
import EditPrioritySelector from "./EditPriority";
import EditDetails from "./EditDetails";

import SubmitEditButton from "./SubmitEditButton";

// COMPONENT
const EditForm = () => {
  const editForm = Element("form", {
    id: `edit-form`,
  });

  const hiddenInput = Element("input", {
    type: "hidden",
    id: "edit-form-hidden-input",
  });

  editForm.appendChild(EditTitle());
  editForm.appendChild(EditDeadline());
  editForm.appendChild(EditPrioritySelector());
  editForm.appendChild(EditDetails());
  editForm.appendChild(SubmitEditButton());
  editForm.appendChild(hiddenInput);

  return editForm;
};

export default EditForm;
