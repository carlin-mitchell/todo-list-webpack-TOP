import { endOfDay } from "date-fns";
import { v4 as uuidv4 } from "uuid";

const listItem = {
  id: null,
  content: null,
  dateCreated: null,
  completed: false,
};

let data = {
  todoListApp: {
    listName: {
      default: {},
    },
  },
};

const testId = uuidv4();
data.todoListApp.listName.default[testId] = {
  id: testId,
  content: "this is only a test",
  dateCreated: new Date(),
  completed: false,
};

const getDataFromLocalStorage = () => {
  const appData = JSON.parse(window.localStorage.getItem("todoListApp"));

  if (appData) {
    data = appData;
  } else {
    window.localStorage.setItem("todoListApp", JSON.stringify(data));
  }
};

const clearTodos = () => {
  const todos = document.querySelector("#todos");

  while (todos.childNodes.length > 1) {
    todos.removeChild(todos.lastChild);
  }
};

const addOne = (listName, data) => {};

const getAll = (listName) => {
  return data.todoListApp.listName;
};
const getOne = (listName, taskId) => {};

const removeAll = (listName) => {};
const removeOne = (listName, taskId) => {};

const updateOne = (listName, taskId, data) => {};
const todoService = {
  getDataFromLocalStorage,
  data,
  addOne,
  getAll,
  getOne,
  removeAll,
  removeOne,
  updateOne,
};

export default todoService;
