const testing = false;

import "./normalize.css";
import "./app.css";

import ui from "./managers/uiManager";
import data from "./managers/todoDataManager";
import { initTestData } from "./managers/testDataGenerator";

import Content from "./components/Content/Content";

document.body.appendChild(Content());

if (testing) {
  if (data.getProjectTodos().length === 0) initTestData();
}

ui.displayProjectTodos();
