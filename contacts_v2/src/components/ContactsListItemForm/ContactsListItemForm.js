import React, { Component } from 'react';
import propTypes from '../propTypes';
import './ContactsListItemForm.css';

export default class ContactsListItemForm extends Component {
  constructor(props) {
    super(props);
      this.textInput = React.createRef();
  }  

  componentDidMount() {
    this.textInput.current.focus();
  }
  

  onInputChange = e => {
    this.props.changeData({
      [e.target.name]: e.target.value
    });    
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.submitData();
    this.textInput.current.focus();
  }

  render() {
    const { name, surname, age, phone } = this.props.data;
    return (
      <div>
        <form className="contacts__form" onSubmit={this.onFormSubmit}>
          <input className="contacts__form-item" type="text" name="name" value={name} placeholder="name" onChange={this.onInputChange} ref={this.textInput}/>
          <input className="contacts__form-item" type="text" name="surname" value={surname} placeholder="surname" onChange={this.onInputChange} />
          <input className="contacts__form-item" type="text" name="age" value={age} placeholder="age" onChange={this.onInputChange} />
          <input className="contacts__form-item" type="text" name="phone" value={phone} placeholder="phone" onChange={this.onInputChange} />
          <input className="contacts__form-button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

ContactsListItemForm.propTypes = {
  data: propTypes.formData.isRequired,
  changeData: propTypes.func.isRequired,
  submitData: propTypes.func.isRequired,
}
