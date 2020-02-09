import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from '../propTypes';

const TodoList = ({list, onTodoDelete, onTodoDone, onTodoEdit}) => {
  return (
    <ul style={listStyle}>
        {list.map(todoItem => (
          <TodoListItem key={todoItem.id} item={todoItem}
            onTodoDelete={onTodoDelete}
            onTodoDone={onTodoDone}
            onTodoEdit={onTodoEdit}/>
        ))}
      </ul>
  );
}

const listStyle = {
  listStyle: 'none', 
  margin: '0',
  padding: '0',
}

TodoList.propTypes = {
  onTodoDelete: PropTypes.func.isRequired,
  onTodoDone: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

export default TodoList;
