import { createAction, createReducer } from "@reduxjs/toolkit";
import { createStore } from "redux";

const ADD = "ADD";
const DONE = "DONE";
const DELETE = "DELETE";

export const addTodo = createAction(ADD);
export const toggleDone = createAction(DONE);
export const deleteTodo = createAction(DELETE);

let id = 0;

const reducer = createReducer([], {
  ADD: (todos, { payload }) => {
    todos.push({ id: id++, text: payload.text.trim(), done: false });
  },
  DONE: (todos, { payload }) =>
    todos.map((todo) =>
      todo.id === payload.id ? { ...todo, done: !todo.done } : todo
    ),
  DELETE: (todos, { payload }) =>
    todos.filter((todo) => todo.id !== payload.id),
});

const store = createStore(reducer);

export default store;
