import React from 'react';
import PropTypes from 'prop-types';

const BoardHeader = (props) => {
  function onAddStikerBtn () {
    props.handleAdd();
  }
  return (
    <div>
      <h1>Board with Stikers</h1>
      <button style={addBtnStyle} type="button" onClick={onAddStikerBtn}>Add Stiker</button>
    </div>
  );
}

const addBtnStyle = {
  marginLeft: '10px',
  padding: '10px',
  borderRadius: '2px',
}

BoardHeader.propTypes = {
  handleAdd: PropTypes.func.isRequired,
}

export default BoardHeader;
