// import React from 'react';
// import { Formik } from 'formik';
// import {
//   FormBtn,
//   FormText,
//   FormStyle,
//   InputContact,
// } from './ContactForm.styled';
// import shortid from 'shortid';
// import PropTypes from 'prop-types';

// const initialValues = {
//   id: shortid.generate(),
//   name: '',
//   number: '',
// };

// export const ContactForm = ({ contacts, addContact }) => {
//   const handleSubmit = (values, { resetForm }) => {
//     const isInclude = contacts.some(
//       contact => contact.name.toLowerCase() === values.name.toLowerCase()
//     );
//     if (isInclude) {
//       alert(`${values.name} is already in contacts`);
//       return;
//     }
//     addContact(values);
//     resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <FormStyle autoCapitalize="off">
//         <FormText>Name</FormText>
//         <label>
//           <InputContact
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <FormText>Number</FormText>
//         <label>
//           <InputContact
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>

//         <FormBtn type="submit">Add contact </FormBtn>
//       </FormStyle>
//     </Formik>
//   );
// };

// ContactForm.prototype = {
//   contacts: PropTypes.array,
//   addContact: PropTypes.func,
// };
