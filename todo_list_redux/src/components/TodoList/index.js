import { connect } from "react-redux";
import TodoList from "./TodoList";
import {
  changeModalState,
  deleteTodo,
  toggleTodo,
  setTodo
} from "../../store/actions";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  changeModalState,
  deleteTodo,
  toggleTodo,
  setTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
