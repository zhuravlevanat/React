import React, { Component } from 'react';
import './App.css';
import ContactsList from './components/ContactsList/ContactsList';
import ContactListItemForm from './components/ContactsListItemForm/ContactsListItemForm';


export default class App extends Component {
  state = {
    contacts: [
      {
        "id": 1,
        "age": 33,
        "name": "Leanne",
        "surname": "Graham",
        "phone": "1-770-736-8031 x56442",
      },
      {
        "id": 2,
        "age": 33,
        "name": "Ervin",
        "surname": "Howell",
        "phone": "010-692-6593 x09125",
      },
      {
        "id": 3,
        "age": 33,
        "name": "Clementine",
        "surname": "Bauch",
        "phone": "1-463-123-4447",
      },
      {
        "id": 4,
        "age": 33,
        "name": "Patricia",
        "surname": "Lebsack",
        "phone": "493-170-9623 x156",
      },
      {
        "id": 5,
        "age": 33,
        "name": "Chelsey",
        "surname": "Dietrich",
        "phone": "(254)954-1289"
      },
      {
        "id": 6,
        "age": 33,
        "name": "Dennis",
        "surname": "Schulist",
        "phone": "1-477-935-8478 x6430",
      },
      {
        "id": 7,
        "age": 33,
        "name": "Kurtis",
        "surname": "Weissnat",
        "phone": "210.067.6132",
      },
      {
        "id": 8,
        "age": 33,
        "name": "Nicholas",
        "surname": "Runolfsdottir V",
        "phone": "586.493.6943 x140",
      },
      {
        "id": 9,
        "age": 33,
        "name": "Glenna",
        "surname": "Reichert",
        "phone": "(775)976-6794 x41206",
      },
      {
        "id": 10,
        "age": 33,
        "name": "Clementina",
        "surname": "DuBuque",
        "phone": "024-648-3804",
      }
    ],
    editedState: false,
    formData: {
      name: '',
      surname: '',
      age: '',
      phone: '',
      id: '',
    }
  }

  deleteContact = id => {
    this.setState(state => {
      const contacts = state.contacts.filter(contact => contact.id !== id);
      return {
        ...state,
        contacts
      };
    });
  }

  showContactDetails = id => {
    this.setState(state => {
      const contact = state.contacts.find(contact => contact.id === id);
      const formData = {
        ...contact, 
        id: String(contact.id),
        age: String(contact.age),
      };
      const editedState = true;
      return {
        ...state,
        formData,
        editedState,        
      };
    });
  }

  changeData = data => {
    this.setState({
      formData: {
        ...this.state.formData,
        ...data,
      }
    });
  };

  clearForm = () => {
    return {
        name: '',
        surname: '',
        age: '',
        phone: '',
        id: '',
    }
  }

  submitData = () => {
    this.state.editedState ? this.changeContactData() : this.addContactData();
    const formData = this.clearForm();
    this.setState({
      formData,
    });
  };


  addContactData = () => {
    const newContact = {
      ...this.state.formData,
      id: Date.now(),
      age: Number(this.state.formData.age),
    }
    this.setState({
      contacts: [...this.state.contacts, newContact]
    });
  };

   changeContactData = () => {
    const newContact = {
      ...this.state.formData,
      id: Number(this.state.formData.id),
      age: Number(this.state.formData.age),
    }
    this.setState(state => {
      const contacts = state.contacts.map(contact => (contact.id === newContact.id) ? newContact : contact);
      return {
        ...state,
        contacts,
      };
    });
   }
    openNewForm = data => {
    this.setState(state => {
      const editedState = false;
      const formData = this.clearForm();
      return {
        ...state,
        editedState,
        formData,
      };
    });
  };

  render() {
    return (
      <div className='container'>
        <ContactsList contacts={this.state.contacts}
        deleteContact={this.deleteContact}
        showContactDetails={this.showContactDetails}
        addData={this.openNewForm}/>
        <ContactListItemForm 
          data={this.state.formData}
          editState={this.state.editedState} 
          changeData={this.changeData}
          submitData={this.submitData}
         />        
      </div>
    )
  }
}
