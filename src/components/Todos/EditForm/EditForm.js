import Element from "../../Element";

import EditTitle from "./EditTitle";
import EditDeadline from "./EditDeadline";
import EditPrioritySelector from "./EditPriority";
import EditDetails from "./EditDetails";

// COMPONENT
const EditForm = () => {
  const editForm = Element("form", {
    id: `edit-form`,
  });

  editForm.appendChild(EditTitle());
  editForm.appendChild(EditDeadline());
  editForm.appendChild(EditPrioritySelector());
  editForm.appendChild(EditDetails());

  return editForm;
};

export default EditForm;
