import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getInfoForm = formData => {
    this.state.contacts.forEach(element => {
      if (formData.name === element.name) {
        alert(`${element.name} is alredy in contacts`);
        return;
      }
    });

    this.setState(prevState => ({
      contacts: [...prevState.contacts, formData],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  onDeleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '35px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm getInfoForm={this.getInfoForm} />
        <ContactList
          formInfo={filteredContacts}
          onFilterChange={this.handleFilterChange}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
