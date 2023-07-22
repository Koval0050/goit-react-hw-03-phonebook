import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

const ContactList = ({ formInfo, onFilterChange, onDeleteContact }) => {
  return (
    <div>
      <h2 className={css.titleContacts}>Contacts</h2>
      <input
        className={css.filterInput}
        type="text"
        onChange={onFilterChange}
        placeholder="Search by name"
      />
      <ul className={css.contactList}>
        {formInfo.map(user => (
          <ContactListItem
            key={user.id}
            {...user}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
