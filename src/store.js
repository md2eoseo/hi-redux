import { configureStore, createSlice } from "@reduxjs/toolkit";

let id = 0;

const toDos = createSlice({
  name: "todosReducer",
  initialState: [],
  reducers: {
    addTodo: (todos, { payload }) => {
      todos.push({ id: id++, text: payload.text.trim(), done: false });
    },
    toggleDone: (todos, { payload }) =>
      todos.map((todo) =>
        todo.id === payload.id ? { ...todo, done: !todo.done } : todo
      ),
    deleteTodo: (todos, { payload }) =>
      todos.filter((todo) => todo.id !== payload.id),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { addTodo, toggleDone, deleteTodo } = toDos.actions;

export default store;
