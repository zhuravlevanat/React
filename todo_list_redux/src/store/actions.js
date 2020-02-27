import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CHANGE_MODAL_STATE,
  SET_TODO,
  CHANGE_TODO
} from "./actionTypes";

export const setTodo = todo => ({ type: SET_TODO, payload: todo });

export const addTodo = todo => {
  if (!todo.id) {
    todo.id = Date.now();
    return { type: ADD_TODO, payload: todo };
  }
  return { type: CHANGE_TODO, payload: todo };
};

export const deleteTodo = id => {
  return { type: DELETE_TODO, payload: id };
};

export const toggleTodo = id => {
  return { type: TOGGLE_TODO, payload: id };
};

export const changeModalState = value => {
  return { type: CHANGE_MODAL_STATE, payload: value };
};
