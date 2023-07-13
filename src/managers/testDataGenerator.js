import { v4 as uuidv4 } from "uuid";

import { addTodoToProject } from "./todoDataManager";

const testData = [
  {
    content: "test content A",
  },
  {
    content: "test content B",
  },
  {
    content: "test content C",
  },
];

export function initTestData() {
  testData.forEach((todo) => addTodoToProject("default", todo.content));
}
