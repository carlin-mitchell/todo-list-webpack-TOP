import "./normalize.css";
import "./app.css";

import { initTestData } from "./managers/testDataGenerator";

import ui from "./managers/uiManager";
import data from "./managers/todoDataManager";

import Content from "./components/Content/Content";

document.body.appendChild(Content());

const testing = true;
if (testing) {
  initTestData();
}

ui.displayInitialTodos();

data.saveDataToLocalStorage();
data.getDataFromLocalStorage();
