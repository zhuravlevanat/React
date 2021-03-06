import React from 'react';
import PropTypes from '../propTypes';

const TodoListItem = ({onTodoDone, onTodoDelete, onTodoEdit, item}) => {
  return (
    <li style={item.isDone ? {...todoStyle, backgroundColor: 'lightgreen'} : todoStyle } 
      onClick={() => onTodoDone(item.id)}>
      {item.title}
      <div style={buttonContainer}>
        <span style={{marginRight: '10px'}} onClick={(e) => onTodoEdit(e, item)}>✎</span>
        <span onClick={(e) => onTodoDelete(e, item.id)}>X</span>
      </div>    
    </li>
  );
}

const todoStyle = {
  color: '#555',
  border: '1px solid #bbb',
  cursor: 'pointer',
  padding: '7px',
  margin: '20px',
  fontSize: '16px',
  backgroundColor: 'hsl(60, 100%, 94%)',
}

const buttonContainer = {
  display: 'inline',
  float: 'right',
}

TodoListItem.propTypes = {
  onTodoDelete: PropTypes.func.isRequired,
  onTodoDone: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

export default TodoListItem;
