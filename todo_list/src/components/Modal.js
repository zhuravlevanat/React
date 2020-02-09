import React, {useRef, useEffect} from 'react';
import PropTypes from '../propTypes';

const Modal = ({onChange, onCancel, onFormSubmit, todo}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();    
  }, [])
  return (
    <div style={modalContainer}>
      <div  style={formStyle} >
        <form onSubmit={(e) => onFormSubmit(e, todo)}>
          <input style={inputStyle} type="text" value={todo.title} 
            onChange={(e) => onChange(e.target.value)} ref={inputRef}></input>
          <div style={btnContainer}>
            <button style={btnStyle} type="button" onClick={onCancel}>Cancel</button>
            <button style={btnStyle} type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const modalContainer = {
  position: 'fixed',
  opacity: '0.95',
  backgroundColor: '#A7A7A2',
  height: '100%',
  width: '100%',
  zIndex: '10000',
  display: 'flex', 
}

const formStyle = {
  margin: '0 auto',
  marginTop: '150px',
  width: '300px',
  height: '100px',
  backgroundColor: '#272726',
  padding: '20px',
  
}

const inputStyle = {
  margin: '0',
  width: '92%',
  padding: '10px',
  marginBottom: '10px',
}

const btnStyle = {
  width: '45%',
  padding: '10px',
  borderRadius: '1px',
  color: '#272726',
  fontWeight: 'bold',
}

const btnContainer = {  
  display: 'flex',
  justifyContent: 'space-between',
}

Modal.propTypes = {
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
}

export default Modal;
