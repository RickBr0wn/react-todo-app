import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import TodoEntry from './TodoEntry'
import { deleteTodo, addTodo, completeTodo } from '../Actions/todoActions'

export class TodoList extends Component {
  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.setState({
  //     newTodo: '',
  //     todos: [...this.state.todos, { title: this.state.newTodo }]
  //   })
  // }

  constructor(props) {
    super(props)

    this.state = {
      newTodo: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onAddTodo(this.state.newTodo)
  }

  handleChange = event =>
    this.setState({ [event.target.id]: event.target.value })

  render() {
    const { todos, onDeleteTodo, addTodo, onCompleteTodo } = this.props
    return <div className="app">
        <h1>Todo List</h1>
        <a class="waves-effect waves-light btn">
          <i class="material-icons left">cloud</i>button
        </a>
        <TodoItem todos={todos} onDeleteTodo={onDeleteTodo} onCompleteTodo={onCompleteTodo} />
        <TodoEntry addTodo={addTodo} handleSubmit={this.handleSubmit} handleChange={this.handleChange} newTodo={this.state.newTodo} />
      </div>
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapActionsToProps = {
  onDeleteTodo: deleteTodo,
  onAddTodo: addTodo,
  onCompleteTodo: completeTodo,
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoList)
