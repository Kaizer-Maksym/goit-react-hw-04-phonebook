import { useState } from 'react';
import {
  FormBtn,
  FormText,
  FormStyle,
  InputContact,
} from './ContactForm.styled';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export const ContactsForm = ({ addContacts, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = shortid();
  const data = { id, name, number };

  const onSubmit = e => {
    e.preventDefault();
    addContacts(data);
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    const isInclude = contacts.some(
      contact => contact.name.toLowerCase() === value.toLowerCase().trim()
    );

    if (isInclude) {
      alert(`${value} is already in contacts`);
      return;
    }
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  return (
    <FormStyle autoCapitalize="off" onSubmit={onSubmit}>
      <FormText>Name</FormText>
      <label>
        <InputContact
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <FormText>Number</FormText>
      <label>
        <InputContact
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <FormBtn type="submit">Add contact </FormBtn>
    </FormStyle>
  );
};

ContactsForm.prototype = {
  addContacts: PropTypes.func,
  contacts: PropTypes.array,
};
