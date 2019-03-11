import { ADD_TODO, DELETE_TODO, MARK_COMPLETE } from '../actions';

const initialState = {
  todos: [
    {
        value: "example todo",
        completed: false,
        id: Math.random()*1000
    },
    {
        value: "example todo 2",
        completed: false,
        id: Math.random()*1000
    },
]
};

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_TODO:
            return{
                todos:[ 
                    ...state.todos, 
                    {
                        value: action.payload,
                        completed: false,
                        id: Math.random()*1000
                    }
                ]
        };
        case DELETE_TODO:
            return{
                todos: state.todos.filter(todo => `${todo.id}` !== action.payload)
        }
        case MARK_COMPLETE:
            return{
                todos: state.todos.map(todo => {
                    if(`${todo.id}` === action.payload){
                        todo.completed = !todo.completed
                    }
                    console.log(todo);
                    return todo;
                })
        }
        default:
            return state;
    }
};