import { createStore } from "redux";

const input = document.querySelector("input");
const submit = document.querySelector("button");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DONE = "DONE";
const DELETE = "DELETE";

let id = 0;

const todosModifier = (todos = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD:
      return [...todos, createTodo()];
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

const todosStore = createStore(todosModifier);

const deleteTodo = (e) => {
  todosStore.dispatch({ type: DELETE, payload: { id: parseInt(e.target.id) } });
};

const toggleDone = (e) => {
  todosStore.dispatch({ type: DONE, payload: { id: parseInt(e.target.id) } });
};

const createTodo = () => {
  const todo = { id: id++, text: input.value.trim(), done: false };
  input.value = "";
  return todo;
};

const addTodo = (todo) => {
  const li = document.createElement("li");
  li.id = todo.id;
  li.innerText = todo.text;
  if (todo.done) {
    li.style.textDecoration = "line-through";
  }
  li.addEventListener("click", toggleDone);
  li.addEventListener("dblclick", deleteTodo);
  ul.appendChild(li);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    todosStore.dispatch({ type: ADD });
  }
  return false;
};

const onChange = () => {
  ul.innerHTML = "";
  const todos = todosStore.getState();
  todos.forEach((todo) => addTodo(todo));
};

todosStore.subscribe(onChange);

submit.addEventListener("click", handleSubmit);
