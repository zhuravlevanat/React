import { connect } from "react-redux";
import Modal from "./Modal";
import { addTodo, changeModalState, setTodo } from "../../store/actions";

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = {
  addTodo,
  changeModalState,
  setTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
