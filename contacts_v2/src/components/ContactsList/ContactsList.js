import React, { Component } from 'react'
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import propTypes from '../propTypes';
import './ContactsList.css';

export default class ContactsList extends Component {
  onAddContactBtnClick = () => {
    this.props.addData();    
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th className="contacts__list-header">Full name</th>            
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map(item => (
              <ContactsListItem key={item.id} item={item} 
                                deleteContact={this.props.deleteContact}
                                showContactDetails={this.props.showContactDetails} />
            ))}
          </tbody>
        </table>
        <button className="contacts__list-button" onClick={this.onAddContactBtnClick}>Add Contact</button>
      </div>      
    )
  }
}

ContactsList.propTypes = {
  contacts: propTypes.contactsList.isRequired,
  deleteContact: propTypes.func.isRequired,
  showContactDetails: propTypes.func.isRequired,
  addData: propTypes.func.isRequired,
}
