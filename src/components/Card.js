import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function Card({ id, text, done, toggleDone, deleteTodo }) {
  return (
    <div style={done ? { textDecoration: "line-through" } : {}}>
      <Link to={`/${id}`}>
        <span>{text}</span>
      </Link>
      <button onClick={toggleDone}>done</button>
      <button onClick={deleteTodo}>delete</button>
    </div>
  );
}

function mapDispatchToProps(dispatch, { id }) {
  return {
    toggleDone: () => dispatch(actionCreators.toggleDone(id)),
    deleteTodo: () => dispatch(actionCreators.deleteTodo(id)),
  };
}

export default connect(null, mapDispatchToProps)(Card);
