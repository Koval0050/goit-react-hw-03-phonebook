const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <li style={{ display: 'flex', columnGap: '15px' }}>
      <p> {name}: </p>
      <p> {number}</p>
      <button
        onClick={() => {
          onDeleteContact(name);
        }}
      >
        &times; delete
      </button>
    </li>
  );
};

export default ContactListItem;
