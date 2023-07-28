import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    // Завантажуємо контакти з localStorage під час початкового відтворення
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate() {
    // Зберігаємо контакти в localStorage кожного разу, коли змінюється стан «контактів».
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  getInfoForm = formData => {
    const isContactExists = this.state.contacts.some(
      contact => formData.name === contact.name
    );
    if (isContactExists) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

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

export default App;
