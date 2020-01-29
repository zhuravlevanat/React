import React, { Component } from 'react';
import propTypes from '../propTypes';
import './ContactsListItem.css';

export default class ContactsListItem extends Component {
  onDeleteButtonClick = (e) => {
    e.stopPropagation();
    this.props.deleteContact(this.props.item.id);
  }
  onContactItemClick = () => {
    this.props.showContactDetails(this.props.item.id);
  }
  render() {
    const { name, surname } = this.props.item;
    return (
      <tr>
        <td className="contacts__list-item" onClick={this.onContactItemClick}>{name} {surname}
          <span className="delete-btn" onClick={this.onDeleteButtonClick}>
            ✘
          </span>
        </td>
      </tr>
    )
  }
}

ContactsListItem.propTypes = {
  item: propTypes.contactsListItem.isRequired,
  deleteContact: propTypes.func.isRequired,
  showContactDetails: propTypes.func.isRequired,
}
