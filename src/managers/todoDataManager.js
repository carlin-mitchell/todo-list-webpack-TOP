import { v4 as uuidv4 } from "uuid";

export let todoData = {
  projects: {
    default: {},
  },
};

export function saveDataToLocalStorage() {
  window.localStorage.setItem("todoAppData", JSON.stringify(todoData));
}

export function getDataFromLocalStorage() {
  const data = window.localStorage.getItem("todoAppData");

  if (data) {
    todoData = JSON.parse(data);
  }
}

/**
 *
 * @param {string} projectName the name of the project the related todo objects are from. If no value provided "default" is used.
 * @returns {array} an array of todo objects from the associated project name
 */
export function getProjectTodos(projectName = "default") {
  getDataFromLocalStorage();
  const projectTodos = todoData.projects[projectName];
  return Object.values(projectTodos);
}

/**
 *
 * @param {string} projectName the name of the project the related todo object from. If no value provided "default" is used.
 * @param {string} todoId the todo object's id
 * @returns {object} todo object with the specified ID
 */
function getProjectTodo(todoId, projectName = "default") {
  const todo = todoData.projects[projectName][todoId];
  return todo;
}

/**
 *
 * @param {string} projectName the name of he project the todo will be added to. If no value provided "default" is used.
 * @param {string} todoContent content for the new todo object
 * @returns {object} the newTodoObject that was added to the project
 */
export function addTodoToProject(todoContent, projectName = "default") {
  //get the current todos in the project
  const currentProjectTodos = todoData.projects[projectName];
  // create a new todo object its key and id will be the same value
  const id = uuidv4();
  const newTodo = {
    id: id,
    content: todoContent,
    dateCreated: new Date(),
    isComplete: false,
    isNew: true,
  };

  // add the new todo to the project
  todoData.projects[projectName] = { ...currentProjectTodos, [id]: newTodo };
  saveDataToLocalStorage();
  return newTodo;
}

/**
 *
 * @param {string} projectName the name of he project the todo will be removed from. If no value provided "default" is used.
 * @param {string} todoId the id of the Todo object to be removed
 * @return {object} the todo object that was removed
 */
export function removeTodoFromProject(todoId, projectName = "default") {
  const todoToRemove = getProjectTodo(todoId, projectName);

  delete todoData.projects[projectName][todoId];
  saveDataToLocalStorage();
  return todoToRemove;
}

/**
 *
 * @param {object} updateObj an object containing the updates required
 * @param {string} todoId todoId the id of the Todo object to be updated
 * @param {string} projectName the name of he project the todo will be updated in. If no value provided "default" is used.
 * @returns {object} the updated todo object
 */
export function updateProjectTodo(updateObj, todoId, projectName = "default") {
  const currentTodoObj = todoData.projects[projectName][todoId];
  const updatedTodoObj = { ...currentTodoObj, ...updateObj };

  todoData.projects[projectName][todoId] = updatedTodoObj;
  saveDataToLocalStorage();
  return updatedTodoObj;
}

export default {
  removeTodoFromProject,
  getProjectTodos,
  addTodoToProject,
  updateProjectTodo,
  saveDataToLocalStorage,
  getDataFromLocalStorage,
};
