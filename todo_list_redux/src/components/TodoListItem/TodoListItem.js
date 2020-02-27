import React from "react";
import PropTypes from "../../propTypes";

const TodoListItem = ({
  deleteTodo,
  toggleTodo,
  changeModalState,
  item,
  setTodo
}) => {
  const onTodoEdit = e => {
    e.stopPropagation();
    changeModalState(true);
    setTodo(item);
  };

  const onTodoDelete = e => {
    e.stopPropagation();
    deleteTodo(item.id);
  };

  return (
    <li
      style={
        item.done ? { ...todoStyle, backgroundColor: "lightgreen" } : todoStyle
      }
      onClick={() => toggleTodo(item.id)}
    >
      {item.title}
      <div style={buttonContainer}>
        <span style={{ marginRight: "10px" }} onClick={onTodoEdit}>
          ✎
        </span>
        <span onClick={onTodoDelete}>X</span>
      </div>
    </li>
  );
};

const todoStyle = {
  color: "#555",
  border: "1px solid #bbb",
  cursor: "pointer",
  padding: "7px",
  margin: "20px",
  fontSize: "16px",
  backgroundColor: "hsl(60, 100%, 94%)"
};

const buttonContainer = {
  display: "inline",
  float: "right"
};

TodoListItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  changeModalState: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export default TodoListItem;
