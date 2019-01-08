import React from 'react'

const TodoEntry = ({ handleSubmit, handleChange, newTodo }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="newTodo"
        onChange={handleChange}
        value={newTodo}
        placeholder="Enter a new ToDo item!"
        type="text"
      />
      <button type="submit">Add New Item</button>
    </form>
  )
}

export default TodoEntry
