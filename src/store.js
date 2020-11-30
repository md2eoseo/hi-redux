import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const addTodo = createAction("ADD");
export const toggleDone = createAction("DONE");
export const deleteTodo = createAction("DELETE");

let id = 0;

const reducer = createReducer([], {
  [addTodo]: (todos, { payload }) => {
    todos.push({ id: id++, text: payload.text.trim(), done: false });
  },
  [toggleDone]: (todos, { payload }) =>
    todos.map((todo) =>
      todo.id === payload.id ? { ...todo, done: !todo.done } : todo
    ),
  [deleteTodo]: (todos, { payload }) =>
    todos.filter((todo) => todo.id !== payload.id),
});

const store = configureStore({ reducer });

export default store;
