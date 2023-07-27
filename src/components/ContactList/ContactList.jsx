import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, fetchContacts } from '../../redux/contactsOperations';
import { selectError, selectIsLoading, selectVisibleContacts } from '../../redux/selectors';
import toast from 'react-hot-toast';
import { ContactsList, ContactItem, RemoveBtn, DataContacts, NoContacts } from './ContactsList.styled';
import Loader from 'components/Loader';
import { MdDeleteForever } from 'react-icons/md';
import { FcTwoSmartphones } from 'react-icons/fc';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleRemoveContact = (id) => {
    dispatch(removeContact(id));
    toast.success('Contact deleted successfully!');
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {visibleContacts.length > 0 ? (
        <ContactsList>
          {visibleContacts.map(({ name, number, id }) => (
            <ContactItem key={id}>
              <FcTwoSmartphones size={40}/> <DataContacts>{name}: {number}</DataContacts>
              <RemoveBtn type='button' onClick={() => handleRemoveContact(id)}>
                <MdDeleteForever />
                Remove
              </RemoveBtn>
            </ContactItem>
          ))}
        </ContactsList>
      ) : (
        <NoContacts>No contacts found.</NoContacts>
      )}
    </div>
  );
};

export default ContactList;