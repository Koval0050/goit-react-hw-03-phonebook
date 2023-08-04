import React from "react";
import { nanoid } from "nanoid";
import { WrapperPhonebook } from "./components/Phonebookwrapper/phonebookwrapper";
import { Title } from "./components/Title/title";
import { InputForm } from "./components/Addform/addform";
import { ContactsTitle } from "./components/Contacttitle/contactTitle";
import { Search } from "./components/Search/search";
import { ContactList } from "./components/Contactslist/contactList";
import { ShowButton } from "./components/ShowButton/showButton";
import { CountMessage } from "./components/CountMessage/CountMessage";
import { getCountMessage } from "./utils/getCountMessage";
import { save, load } from "./utils/localStorageJSON";

export class App extends React.Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    buttonVisible: true,
  };

  handleAddContact = (newContactData) => {
    const newContactEntity = {
      id: nanoid(),
      ...newContactData,
    };

    this.checkNewContactPresence(newContactEntity.name)
      ? alert(`${newContactEntity.name} is already in contacts!`)
      : this.setState((state) => ({
          contacts: [...state.contacts, newContactEntity],
        }));
    save("contacts", this.state.contacts);
  };

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      save("contacts", this.state.contacts);
    }
  }
  componentDidMount() {
    const savedContacts = load("contacts");
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  handleDeleteContact = (contactId) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== contactId),
    }));
    if (this.state.contacts.length === 1) {
      this.setState((prevState) => {
        return {
          buttonVisible: !prevState.buttonVisible,
        };
      });
    }
  };

  handleFilterContactsByName = ({ target: { value } }) => {
    this.setState(() => ({ filter: value }));
  };

  checkNewContactPresence = (contactName) => {
    return this.state.contacts.some((contact) => contact.name === contactName);
  };

  handleToggleSecondButtonVisibility = () => {
    this.setState((prevState) => {
      return {
        buttonVisible: !prevState.buttonVisible,
      };
    });
    console.log("click");
    // setFilterContacts(contacts);
  };

  render() {
    const { contacts, filter, buttonVisible } = this.state;
    const contactsFilteredByName = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <WrapperPhonebook>
        <Title text="PhoneBook" />
        {buttonVisible && (
          <InputForm
            addContact={this.handleAddContact}
            // contacts={contacts}
            // onUpdateContact={setContacts}
          />
        )}
        {buttonVisible && (
          <CountMessage text={getCountMessage(contacts.length)} />
        )}
        {contacts.length !== 0 && (
          <ShowButton
            contactCount={contacts.length}
            onButtonChange={this.handleToggleSecondButtonVisibility}
          ></ShowButton>
        )}
        {!buttonVisible && (
          <>
            <ContactsTitle text="Contacts" />
            <Search
              filter={filter}
              onChange={this.handleFilterContactsByName}
              // valueSearch={searchText}
              // onChange={changeFilter}
              text={"Find contacts by name"}
            />
            {/* {filterContacts.length === 0 ? ( */}
            {/* <p>There are no contacts matching the search criteria</p> */}
            {/* ) : ( */}
            <ContactList
              contacts={contactsFilteredByName}
              onDelete={this.handleDeleteContact}
              // contacts={filterContacts}
              // onDeleteContact={handleDeleteContact}
            />
          </>
        )}
      </WrapperPhonebook>
    );
  }
}
