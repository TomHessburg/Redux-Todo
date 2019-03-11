import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, markComplete } from '../actions'

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
                        <p style={{
                            textDecoration: `${todo.completed ? "line-through" : "none"}`,
                            color: `${todo.completed ? "red" : "white"}`
                        }}>{todo.value}</p>

                        <button
                            id={todo.id}
                            onClick={handelDeleteTodo}
                        >x</button>

                        <button
                            id={todo.id}
                            onClick={e => {
                                e.preventDefault();
                                props.markComplete(e.target.id)
                            }}
                        >mark complete</button>

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

export default connect(mapStateToProps, { deleteTodo, markComplete })(Todos)
