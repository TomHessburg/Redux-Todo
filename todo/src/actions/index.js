
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO"
export const MARK_COMPLETE = "MARK_COMPLETE"

export const addTodo = inputValue => {
  console.log("in action creator: ", inputValue);
  return {
    type: ADD_TODO,
    payload: inputValue
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const markComplete = id => {
  return {
    type: MARK_COMPLETE,
    payload: id
  }
}


  