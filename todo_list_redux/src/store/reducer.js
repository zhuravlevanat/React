import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CHANGE_MODAL_STATE,
  SET_TODO,
  CHANGE_TODO
} from "./actionTypes";

const initialState = {
  todos: [
    {
      id: 1,
      title: "To buy a ticket",
      done: false
    },
    {
      id: 2,
      title: "To buy a dress",
      done: false
    },
    {
      id: 3,
      title: "To buy a car",
      done: false
    }
  ],
  modalState: false,
  todo: { title: "", isDone: false }
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === payload) {
            todo.done = !todo.done;
          }
          return todo;
        })
      };
    case CHANGE_MODAL_STATE:
      console.log("payload", payload);
      return {
        ...state,
        modalState: payload
      };
    case CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload.id ? payload : todo
        )
      };
    case SET_TODO:
      return {
        ...state,
        todo: payload
      };
    default:
      return state;
  }
}
