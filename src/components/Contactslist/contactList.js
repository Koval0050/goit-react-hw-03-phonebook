import React from "react";
import PropTypes from "prop-types";
import { FcCellPhone, FcBusinessman } from "react-icons/fc";
import {
  ContactListContainer,
  ContactListItem,
  ContactsName,
  ContactsPhone,
  DeleteContacts,
} from "./contactList.styled";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListContainer>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id}>
          <ContactsName>
            <FcBusinessman size={24}></FcBusinessman>
            {contact.name}
          </ContactsName>
          <ContactsPhone>
            <FcCellPhone size={24}></FcCellPhone>
            {contact.number}
          </ContactsPhone>
          <DeleteContacts onClick={() => onDelete(contact.id)}>
            Delete
          </DeleteContacts>
        </ContactListItem>
      ))}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
