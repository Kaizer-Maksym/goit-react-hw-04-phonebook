import React from 'react';
import {
  ContactItem,
  BtnOnDelet,
  ContactInfo,
  ListOfContacts,
} from './ContactsList.styled';
import PropTypes from 'prop-types';
import { BsTelephoneFill } from 'react-icons/bs';

export const ContactsList = ({ contacts, delet }) => {
  return (
    <ListOfContacts>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <ContactInfo>
            <BsTelephoneFill size="15px" color="#00000091" />
            <span>{name} :</span>
            <span>{number}</span>
          </ContactInfo>
          <BtnOnDelet
            onClick={() => {
              delet(id);
            }}
          >
            Delete
          </BtnOnDelet>
        </ContactItem>
      ))}
    </ListOfContacts>
  );
};

ContactsList.prototype = {
  contacts: PropTypes.array,
  delet: PropTypes.func,
};
