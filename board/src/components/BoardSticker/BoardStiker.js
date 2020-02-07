import React, { useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const BoardStiker = (props) => {
  const inputEl = useRef(null);
  
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const onChangeText = (event) => {
    console.log(event.target.value);
    props.handleChange(event.target.value, props.stiker.id)
  }

  const onDeleteBtnClick = () => {
    props.handleDelete(props.stiker.id)
  }

  return (
    <div style={stikerStyle} >
      <p style={btnContainer}><span style={deleteBtnStyle} onClick={onDeleteBtnClick}>x</span></p>            
      <textarea style={textStyle} ref={inputEl}
        value={props.stiker.text}
        onChange={onChangeText}></textarea>       
    </div>
  );
}

const stikerStyle = {
  width: '120px',
  backgroundColor: 'lightyellow',
  color: 'black',
  margin: '5px',
  padding: '10px',
  display: 'inline-block',  
}

const btnContainer = {
  margin: '0',
  padding: '0',
}

const deleteBtnStyle = {
  float: 'right',
  margin: '2px',
  cursor: 'pointer',
}

const textStyle = {
  height: '100px',
  width: '95%',

}

BoardStiker.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  stiker: PropTypes.object.isRequired,
}

export default BoardStiker;
