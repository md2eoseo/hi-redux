import React from "react";
import { connect } from "react-redux";

function Detail({ todo }) {
  return (
    <>
      <h1>Todo : {todo?.text}</h1>
      <p>{todo?.done ? "it's done!" : "you have thing to do!"}</p>
    </>
  );
}

export default connect((state, ownProps) => ({
  todo: state.find((todo) => todo.id === parseInt(ownProps.match.params.id)),
}))(Detail);
