import React, { Component } from 'react';
import Todo from './todo';

class Todos extends Component {
    state = {  }
    render() { 
        console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <Todo todo={todo} click={this.props.click} remove={this.props.remove}/>
        ));
    }
}
 
export default Todos;