import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import TodoEntry from './TodoEntry'
import { deleteTodo, addTodo, completeTodo } from '../Actions/todoActions'
import hero from '../images/pexels-photo.jpg'

export class TodoList extends Component {
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

  getTime = () => {
    const time = new Date().getTime()
    const date = new Date(time).toString().split(' ') //?
    let returnArray = []
    date.map((item, idx) => idx <= 3 ? returnArray.push(item) : null)
    return returnArray.join(' ')
  }

  render() {
    const { todos, onDeleteTodo, addTodo, onCompleteTodo } = this.props
    return <div className="app">
        <div className="image-container">
          <img src={hero} />
          <div className="hero-inner-container-left">
            <div className="menu-bars">
              <i class="fas fa-bars" />
            </div>
            <div className="hero-text">Your Todo Items</div>
            <div className="date-time">{this.getTime()}</div>
            <div className="total-items-container">
              {todos.length} <span>to complete</span>
            </div>
          </div>
          <div className="hero-inner-container-right" />
        </div>
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
