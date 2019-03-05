import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

const AddTodo = (props) => {

    const [inputValue, setInpputValue] = useState("")

    const handelSubmit = (e, value) => {
        e.preventDefault();
        props.addTodo(value);
        setInpputValue("")
    }

    return(
        <div>
            <form onSubmit={e => handelSubmit(e, inputValue)}>
                <input
                value={inputValue}
                onChange={e => setInpputValue(e.target.value)}
                />
                <button>add todo</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        todos: state.todos,
        inputValue: state.inputValue
    }
}

export default connect(mapStateToProps, { addTodo })(AddTodo)
