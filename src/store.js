import { createAction } from "@reduxjs/toolkit";
import { createStore } from "redux";

export const addTodo = createAction("ADD");
export const toggleDone = createAction("DONE");
export const deleteTodo = createAction("DELETE");

let id = 0;

const reducer = (todos = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case addTodo.type:
      return [...todos, { id: id++, text: payload.text.trim(), done: false }];
    case toggleDone.type:
      return todos.map((todo) =>
        todo.id === payload.id ? { ...todo, done: !todo.done } : todo
      );
    case deleteTodo.type:
      return todos.filter((todo) => todo.id !== payload.id);
    default:
      return todos;
  }
};

const store = createStore(reducer);

export default store;
