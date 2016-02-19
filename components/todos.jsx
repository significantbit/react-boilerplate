import React from "react";
import { connect } from "react-redux";

import NewTodo from "./newTodo";
import Counter from "./counter";
import {addTodo} from "../actions";

const Todos = ({todos, dispatch}) => {
  return (
    <div>
      <h1>Todos</h1>
      <Counter />
      <NewTodo onChange={e =>{
        if(e.keyCode == 13) {
          dispatch(addTodo(e.target.value));
          e.target.value = "";
        }
      }}/>
      
      {todos.map(todo => <p key={todo.id}>{todo.value}</p>)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(Todos);