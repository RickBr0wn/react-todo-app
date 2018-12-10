import {
  UPDATE_TODOS,
  DELETE_TODO,
  ADD_TODO,
  COMPLETE_TODO,
} from '../Constants/todoConstants'

export const todoReducer = (todos = [], { type, payload }) => {
  switch (type) {
    case UPDATE_TODOS:
      return todos
    case DELETE_TODO:
      return todos.filter(item => item.id !== payload.id)
    case ADD_TODO:
      return [...todos, { title: payload.title, id: payload.id }]
    case COMPLETE_TODO:
      todos.map((todo, index) => {
        if (todo.id === payload.id) {
          todo.isComplete = !todos[index].isCompleted
        }
      })
      return todos
    default:
      return todos
  }
}
