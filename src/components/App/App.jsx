import { useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

import { ContactsList } from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { ContactsForm } from '../ContactForm/ContactForm';

import { AppContainer, ToAddContact, List, Heading } from './App.stayled';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContatcs] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  const addContacts = data => {
    setContatcs(prevState => [...prevState, data]);
  };

  const removeContact = contactId => {
    setContatcs(contacts.filter(({ id }) => id !== contactId));
  };

  const getVisibleContact = () => {
    const normalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize)
    );
  };

  const visibleContacts = getVisibleContact();

  return (
    <AppContainer>
      <ToAddContact>
        <Heading>Phonebook</Heading>
        <ContactsForm contacts={contacts} addContacts={addContacts} />
      </ToAddContact>

      <List>
        <Heading>Contacts</Heading>
        <ContactFilter
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <ContactsList contacts={visibleContacts} delet={removeContact} />
      </List>
    </AppContainer>
  );
};
