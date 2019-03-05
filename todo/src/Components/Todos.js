import React from 'react';
import { connect } from 'react-redux';
// import { addTodo } from '../actions'

const Todos = (props) => {
    return(
        <div>
            <h1>todos...</h1>
            {props.todos.map(todo => {
                return(
                    <p key={todo.id}>{todo.value}</p>
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(Todos)
