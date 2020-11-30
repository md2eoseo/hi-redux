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

function mapStateToProps(state, ownProps) {
  return {
    todo: state.find((todo) => todo.id === parseInt(ownProps.match.params.id)),
  };
}

export default connect(mapStateToProps)(Detail);
