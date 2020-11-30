import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import { addTodo } from "../store";

function Home({ todos, addTodo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };
  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write todos..."
          value={text}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Card key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

export default connect((state) => ({ todos: state }), { addTodo })(Home);
