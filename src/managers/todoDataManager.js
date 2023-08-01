import { v4 as uuidv4 } from "uuid";

export let todoData = {
  projects: {
    default: {},
  },
  projectNames: [
    {
      id: "all-projects",
      name: "All tasks",
      current: true,
    },
  ],
};

export let currentProjectName = todoData.projectNames[0];

export function getCurrentProjectName() {
  return currentProjectName;
}

export function addNewProjectName(obj) {
  todoData.projectNames.push(obj);
  saveDataToLocalStorage();
}

export function setCurrentProjectName(id) {
  const updatedProjectNames = [...todoData.projectNames].map((project) =>
    project.id === id
      ? { ...project, current: true }
      : { ...project, current: false }
  );
  todoData.projectNames = updatedProjectNames;

  const thisProject = todoData.projectNames.find(
    (project) => project.id === id
  );

  currentProjectName = thisProject;
  saveDataToLocalStorage();
}

export function getAllProjectNames() {
  return todoData.projectNames;
}

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
 * @param {object} todoData an object containing data from th todo creation form
 * @returns {object} the newTodoObject that was added to the project
 */
export function addTodoToProject(newTodoData, projectName = "default") {
  const { todoContent, todoPriority, due, details } = newTodoData;

  //get the current todos in the project
  const currentProjectTodos = todoData.projects[projectName];
  // create a new todo object its key and id will be the same value
  const id = uuidv4();
  const newTodo = {
    id: id,
    content: todoContent,
    dateCreated: new Date(),
    due,
    isComplete: false,
    isNew: true,
    priority: todoPriority.includes("!") ? todoPriority : "",
    details,
    detailsVisible: false,
    projectId: getCurrentProjectName().id,
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
  getProjectTodo,
  addTodoToProject,
  updateProjectTodo,
  saveDataToLocalStorage,
  getDataFromLocalStorage,
  getCurrentProjectName,
  setCurrentProjectName,
  getAllProjectNames,
  addNewProjectName,
};
