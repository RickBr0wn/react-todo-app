import React from 'react'

const TodoItem = ({ todos, onDeleteTodo, onCompleteTodo }) => (
  <div className="list-container">
    {todos &&
      todos.map(item => {
        return (
          <div className="list-item">
            <span>
              <div className="item-text" key={item.title}>
                {item.title}
                <i
                  className="fas fa-times"
                  onClick={() => onDeleteTodo(item.id)}
                />
                <i className="fas fa-info-circle" />
                <i onClick={() => onCompleteTodo(item)} />
              </div>
            </span>
          </div>
        )
      })}
  </div>
)

export default TodoItem
