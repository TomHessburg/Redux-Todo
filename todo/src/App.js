import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Todos />
       <AddTodo />
      </div>
    );
  }
}

export default App;
