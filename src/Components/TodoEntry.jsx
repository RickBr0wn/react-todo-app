import React from 'react'

const TodoEntry = ({ handleSubmit, handleChange, newTodo }) => {
  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <input
        id="newTodo"
        onChange={handleChange}
        value={newTodo}
        placeholder="Enter a new ToDo item!"
        type="text"
        className="input-field"
      />
      <div className="enter-button" type="submit">+</div>
    </form>
  )
}

export default TodoEntry
