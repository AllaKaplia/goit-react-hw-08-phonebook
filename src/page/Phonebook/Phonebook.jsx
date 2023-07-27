import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
import FormContact from 'components/FormContact';
import { TitleForm } from 'components/RegisterForm/RegisterForm.styled';
import { TitleH2 } from './Phonebook.styled';


const Phonebook = () => {
    return (
        <div>
            <TitleForm>Phonebook</TitleForm>
            <TitleH2>Enter the data of the new contact</TitleH2>
            <FormContact />
            <TitleH2>Contacts list</TitleH2>
            <FilterContacts />
            <ContactList />
        </div>
    )
}

export default Phonebook;