import Element from "../../Element";

import EditForm from "./EditForm";

// COMPONENT
const EditFormContainer = () => {
  const container = Element("div", {
    id: `edit-form-container`,
    className: `display-none`,
  });

  container.appendChild(EditForm());

  return container;
};

export default EditFormContainer;
