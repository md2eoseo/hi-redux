import { createStore } from "redux";

const ADD = "ADD";
const DONE = "DONE";
const DELETE = "DELETE";

let id = 0;

const reducer = (todos = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD:
      return [...todos, { id: id++, text: payload.text.trim(), done: false }];
    case DONE:
      return todos.map((todo) =>
        todo.id === payload.id ? { ...todo, done: !todo.done } : todo
      );
    case DELETE:
      return todos.filter((todo) => todo.id !== payload.id);
    default:
      return todos;
  }
};

const store = createStore(reducer);

export const addTodo = (text) => {
  return { type: ADD, payload: { text } };
};
export const toggleDone = (id) => {
  return { type: DONE, payload: { id } };
};
export const deleteTodo = (id) => {
  return { type: DELETE, payload: { id } };
};

export default store;
