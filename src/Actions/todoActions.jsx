import {
  UPDATE_TODOS,
  DELETE_TODO,
  ADD_TODO,
  COMPLETE_TODO,
} from '../Constants/todoConstants'

export const updateTodo = newTodo => ({
  type: UPDATE_TODOS,
  payload: {
    todos: newTodo,
  },
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
})

export const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: {
    title: newTodo,
    id: Math.random(),
  },
})

export const completeTodo = completedTodoId => ({
  type: COMPLETE_TODO,
  payload: {
    id: completedTodoId.id,
  },
})
