import Immutable from "immutable";

export default (state = Immutable.List([]), action=undefined) => {
  switch(action.type){
    case "addTodo":
      return state.push(action.todo);
    default: 
      return state;
  }

};