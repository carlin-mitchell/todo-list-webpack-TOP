import Element from "../../Element";

function editTodo(e) {
  e.preventDefault();
}

// COMPONENT
const SubmitEditButton = () => {
  const button = Element("button", {
    innerText: "Submit Edit",
    onclick: function (e) {
      editTodo(e);
    },
  });
  return button;
};

export default SubmitEditButton;
