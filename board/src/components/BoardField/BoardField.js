import React from 'react';
import BoardSticker from '../BoardSticker/BoardStiker';
import PropTypes from 'prop-types';
 

const BoardField = (props) => {
  return (
    <div style={fieldStyle}>
      {props.stikers.map(stiker => (
      <BoardSticker 
        key={stiker.id}
        stiker={stiker}
        handleDelete={props.handleDelete}
        handleChange={props.handleChange}        
      />))}
    </div>
  );
}

const fieldStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  marginTop: '-50px',
  paddingTop: '50px',
  
}

BoardField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  stikers: PropTypes.array.isRequired,
}

export default BoardField;
