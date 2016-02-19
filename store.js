import {createStore, combineReducers} from "redux";
import todos from "./reducers/todos";
import counter from "./reducers/counter";

const rootReducer = combineReducers({
  todos: todos,
  counter: counter
});

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rootReducer);
export default store;
