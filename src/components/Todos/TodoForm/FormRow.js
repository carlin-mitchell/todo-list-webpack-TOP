import Element from "../../Element";

// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const FormRow = (id) => {
  const parentElement = Element("div", {
    className: "form-row",
    id: `${id}`,
  });

  return parentElement;
};

export default FormRow;
