import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import PropTypes from "../../propTypes";

const TodoList = ({
  todos,
  deleteTodo,
  toggleTodo,
  changeModalState,
  setTodo
}) => {
  return (
    <ul style={listStyle}>
      {todos.map(item => (
        <TodoListItem
          key={item.id}
          item={item}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          changeModalState={changeModalState}
          setTodo={setTodo}
        />
      ))}
    </ul>
  );
};

const listStyle = {
  listStyle: "none",
  margin: "0",
  padding: "0"
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
