import { ADD_TODO } from '../actions';

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
    console.log('In the reducer', state, action);

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
        
        default:
            return state;
    }
};