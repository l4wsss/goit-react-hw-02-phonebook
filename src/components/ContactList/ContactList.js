import {
    ContactsListBtn,
    ContactsListItem,
    ContactsListItems,
  } from './ContactList.styled';
  
  export const ContactsList = ({ onDeleteContact, onFilter }) => {
    return (
      <ContactsListItem>
        {onFilter.map(contact => (
          <ContactsListItems key={contact.id}>
            {contact.name} : {contact.number}
            <ContactsListBtn onClick={() => onDeleteContact(contact.id)}>
              Delete
            </ContactsListBtn>
          </ContactsListItems>
        ))}
      </ContactsListItem>
    );
  };