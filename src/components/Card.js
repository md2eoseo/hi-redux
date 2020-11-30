import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDone, deleteTodo } from "../store";

function Card({ id, text, done, toggleDone, deleteTodo }) {
  return (
    <div style={done ? { textDecoration: "line-through" } : {}}>
      <Link to={`/${id}`}>
        <span>{text}</span>
      </Link>
      <button onClick={() => toggleDone(id)}>done</button>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </div>
  );
}

export default connect(null, { toggleDone, deleteTodo })(Card);
