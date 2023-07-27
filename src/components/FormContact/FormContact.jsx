import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { addContact } from '../../redux/contactsOperations';
import { selectVisibleContacts } from '../../redux/selectors';
import { Input, LabelForm } from './FormContact.styled';
import { PiAddressBookLight } from 'react-icons/pi';
import { BoxBig, ContainerForm, LabelText } from 'components/RegisterForm/RegisterForm.styled';
import Button from '@mui/material/Button';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name is invalid')
    .required('Name is required'),
  number: yup
    .string()
    .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Phone number is invalid')
    .required('Phone number is required'),
});

const initialValue = {
  name: '',
  number: '',
};

const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = (newContact, { resetForm }) => {
    const existingContactByName = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    const existingContactByNumber = contacts.find(
      (contact) => contact.number === newContact.number
    );

    if (existingContactByName) {
      toast.error('A contact with this name already exists!');
      return;
    }

    if (existingContactByNumber) {
      toast.error('A contact with this number already exists!');
      return;
    }

    dispatch(addContact(newContact));

    resetForm();
  };

  return (
    <ContainerForm>
      <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleFormSubmit}>
        <Form autoComplete='off'>
            <BoxBig>
              <LabelForm>
                <LabelText>The name of the new contact</LabelText>
                <Input
                  type='text'
                  name='name'
                  placeholder="Enter name new contact" 
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </LabelForm>
              <LabelForm>
                <LabelText>Phone number</LabelText>
                <Input
                  type='tel'
                  name='number'
                  placeholder="Enter phone number" 
                  title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
                  required
                />
              </LabelForm>
              <Button variant="contained" color="success" type="submit" >
                <PiAddressBookLight size={30} />
                Add contact
              </Button>
            </BoxBig>
        </Form>
      </Formik>
    </ContainerForm>
  );
};

export default FormContact;