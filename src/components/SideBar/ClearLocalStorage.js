import Element from "../Element";

// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const ClearLocalStorage = () => {
  const button = Element("button", {
    innerText: "Clear Local Storage",
    onclick: function () {
      window.localStorage.removeItem("todoAppData");
      window.location.reload();
    },
  });
  return button;
};

export default ClearLocalStorage;
