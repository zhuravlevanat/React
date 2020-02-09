import React from 'react';
import PropTypes from '../propTypes';

const Header = ({onTodoAdd}) => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>TodoList</h1>
      <button style={addBtnStyle} type="button" onClick={onTodoAdd}>Add todo</button>
    </div>
  );
}

const addBtnStyle = {
  padding: '7px',
  borderRadius: '2px',
  marginLeft: '20px',
  color: '#272726',
  fontWeight: 'bold',
}

Header.propTypes = {
  onTodoAdd: PropTypes.func.isRequired,  
}

export default Header;
