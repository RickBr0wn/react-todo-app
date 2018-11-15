import React from 'react'

const TodoItem = ({todos, removeItem}) => 
  <div>
      {todos && todos.map(item => {
        return(
          <div key={item.title}>
            {item.title}
            <i class="fas fa-times" onClick={() => removeItem(item)}></i>
            <i class="fas fa-info-circle"></i>
            <i class="fas fa-check"></i>
          </div>
        )
      })}
    </div>


export default TodoItem
