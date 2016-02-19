let id=0;
export function addTodo(todo) {
  return {
    type: 'addTodo',
    todo: {
      value: todo,
      id: id++ 
    }
  };
}

export function deleteTodo(index) {
  return {
    type: 'deleteTodo',
    index
  };
}

export function increase() {
  return {
    type: 'increase'
  };
}


export function decrease() {
  return {
    type: 'decrease'
  };
}