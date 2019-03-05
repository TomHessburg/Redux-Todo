import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions'

const Todos = (props) => {

    const handelDeleteTodo = e => {
        e.preventDefault()
        console.log(props.deleteTodo);
        props.deleteTodo(e.target.id)
    }

    return(
        <div>
            <h1>todos...</h1>
            {props.todos.map(todo => {
                return(
                    <div key={todo.id} style={{background: "lightgray", width: "30%", margin: "10px auto", padding: "10px"}}>
                        <p>{todo.value}</p>
                        <button
                        id={todo.id}
                        onClick={handelDeleteTodo}
                        >x</button>
                    </div>
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

export default connect(mapStateToProps, { deleteTodo })(Todos)
