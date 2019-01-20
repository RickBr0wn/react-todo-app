import React from 'react'

const TodoItem = ({ todos, onDeleteTodo, onCompleteTodo }) => (
  <div className="list-container">
    {todos &&
      todos.map(item => {
        return (
          <div className="list-item">
            <div className="item-text" key={item.title}>
              {item.title}
            </div>
            <div className="button-container">
              <i className="fas fa-info-circle" />
              <i
                className="fas fa-times"
                onClick={() => onDeleteTodo(item.id)}
              />
              <i onClick={() => onCompleteTodo(item)} />
            </div>
          </div>
        )
      })}
  </div>
)

export default TodoItem
