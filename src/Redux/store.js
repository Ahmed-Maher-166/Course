import { createStore } from "redux";
import rootReducers from "./reducer"; // Root reducer

const store = createStore(rootReducers);

export default store;
