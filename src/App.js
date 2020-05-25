import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import Todos from './components/todos';
import Appbar from './components/AppBar';
import AddItems from './components/addItems';

class App extends Component{
  state = {
    todo: [
      {
        id: 1,
        value: 'go home',
        status:false
      },
      {
        id: 2,
        value: 'go to school',
        status: false
      },
      {
        id: 3,
        value: 'go shopping',
        status: false
      }
    ]
  };

  del = (id) => {
    console.log(id);
    this.setState(
      {
        todo: this.state.todo.map(todo => { 
          if (todo.id === id) {
            todo.status = !todo.status
            
          }
          return todo;
      })}
    );
  }

  addItems = (title) => {
    console.log(title);
    const newTask = {
      id: this.state.todo.length + 1,
      value: title,
      status: false
    }
    this.setState({todo : [...this.state.todo,newTask]});
  }

  remove = (id) => {
    console.log(id);
    this.setState({todo : [...this.state.todo.filter(todo => todo.id !== id)]});
  }

  render() {
    return (
      <React.Fragment>
        <Appbar length={this.state.todo.length} />
        <AddItems addItems={this.addItems}/>
        <Todos remove={this.remove} todos={this.state.todo} click={this.del}/>
      </React.Fragment>
    );
  }
}

export default App;
