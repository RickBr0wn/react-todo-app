import React, { Component } from 'react'
import TodoItem from './TodoItem'
import TodoEntry from './TodoEntry'

export class TodoList extends Component {
  state = {
    newTodo: '',
    todos: [{
      title: 'test'
    },{
      title: 'heavy'
    }]
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, { title: this.state.newTodo }]
    })
  }

  removeItem = itemToRemove => {
    const newTodoArray = this.state.todos.filter(item => item !== itemToRemove)
    this.setState({ todos: [...newTodoArray] })
  }

  handleChange = event =>
    this.setState({ [event.target.id]: event.target.value })
  
  render() {
    const { todos } = this.state
    return (
      <div>
        <h1>Todo List</h1>
        <TodoItem todos={todos} removeItem={this.removeItem} />
        <form onSubmit={this.handleSubmit}>
          <input id="newTodo" onChange={this.handleChange} value={this.state.newTodo} placeholder="Enter a new ToDo item!" type="text" />
          <button type="submit">Add New Item</button>
        </form>
      </div>
    )
  }
}

export default TodoList