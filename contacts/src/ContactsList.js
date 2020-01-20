import React, { Component } from 'react'
import ContactsListItem from './ContactsListItem';

export default class TodoList extends Component {
  render() {
    return (
      <table className="table-data u-full-width">
        <thead>
          <tr className="table-data__header">
            <th>Name</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map(item => (<ContactsListItem key={item.id} item={item}/>))}
        </tbody>
      </table>      
    )
  }
}
