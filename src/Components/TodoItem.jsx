import React from 'react'

const TodoItem = ({ todos, onDeleteTodo, onCompleteTodo }) => 
  <div>
      {todos && todos.map(item => {
        return(
          <div class="row">
            <div class="col s12 m12">
              <div class="card-panel grey">
                <span class="white-text">
                  <div key={item.title}>
                    {item.title}
                    <i className="fas fa-times" onClick={() => onDeleteTodo(item.id)}></i>
                    <i className="fas fa-info-circle"></i>
                    <i className="fas fa-check" onClick={() => onCompleteTodo(item)}></i>
                  </div>
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>


export default TodoItem