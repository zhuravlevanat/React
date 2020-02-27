import React, { useRef, useEffect, useState } from "react";
import PropTypes from "../../propTypes";

const Modal = ({ addTodo, changeModalState, todo, setTodo }) => {
  const [newTodo, setNewTodo] = useState(todo);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChange = e => {
    setNewTodo({
      ...newTodo,
      title: e.target.value
    });
  };

  const onCancel = () => {
    changeModalState(false);
    setNewTodo({
      ...newTodo,
      title: ""
    });
    setTodo({
      title: "",
      done: false
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    changeModalState(false);
    addTodo(newTodo);
    setNewTodo({
      ...newTodo,
      title: ""
    });
    setTodo({
      title: "",
      done: false
    });
  };

  return (
    <div style={modalContainer}>
      <div style={formStyle}>
        <form onSubmit={onFormSubmit}>
          <input
            style={inputStyle}
            type="text"
            value={newTodo.title}
            onChange={onChange}
            ref={inputRef}
          ></input>
          <div style={btnContainer}>
            <button style={btnStyle} type="button" onClick={onCancel}>
              Cancel
            </button>
            <button style={btnStyle} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const modalContainer = {
  position: "fixed",
  opacity: "0.95",
  backgroundColor: "#A7A7A2",
  height: "100%",
  width: "100%",
  zIndex: "10000",
  display: "flex"
};

const formStyle = {
  margin: "0 auto",
  marginTop: "150px",
  width: "300px",
  height: "100px",
  backgroundColor: "#272726",
  padding: "20px"
};

const inputStyle = {
  margin: "0",
  width: "92%",
  padding: "10px",
  marginBottom: "10px"
};

const btnStyle = {
  width: "45%",
  padding: "10px",
  borderRadius: "1px",
  color: "#272726",
  fontWeight: "bold"
};

const btnContainer = {
  display: "flex",
  justifyContent: "space-between"
};

Modal.propTypes = {
  changeModalState: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default Modal;
