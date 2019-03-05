
export const ADD_TODO = "ADD_TODO";

export const addTodo = inputValue => {
  console.log("in action creator: ", inputValue);
  return {
    type: ADD_TODO,
    payload: inputValue
  };
};
 