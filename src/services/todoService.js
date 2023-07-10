import { v4 as uudiv4 } from "uuid";

const listItem = {
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

const getDataFromLocalStorage = () => {
  const appData = JSON.parse(window.localStorage.getItem("todoListApp"));

  if (appData) {
    data = appData;
  } else {
    window.localStorage.setItem("todoListApp", JSON.stringify(data));
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
