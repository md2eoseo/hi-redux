import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import { actionCreators } from "../store";

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

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
    toggleDone: (id) => dispatch(actionCreators.toggleDone(id)),
    deleteTodo: (id) => dispatch(actionCreators.deleteTodo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
