import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import { connect } from "react-redux";

import { changeModalState } from "./store/actions";

const mapDispatchToProps = {
  changeModalState
};

const mapStateToProps = state => {
  return {
    modalState: state.modalState
  };
};

const App = ({ modalState, changeModalState }) => {
  return (
    <Fragment>
      {modalState && <Modal />}
      <div style={containerStyle}>
        <Header changeModalState={changeModalState} />
        <TodoList />
      </div>
    </Fragment>
  );
};

const containerStyle = {
  width: "700px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#272726",
  color: "#ffffff"
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
