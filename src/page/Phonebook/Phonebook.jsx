import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
import FormContact from 'components/FormContact';


const Phonebook = () => {
    return (
        <div>
            <h1>Phonebook</h1>
            <h2>Enter the data of the new contact</h2>
            <FormContact />
            <h2>Contacts list</h2>
            <h3>You can use the search</h3> <FilterContacts />
            <ContactList />
        </div>
    )
}

export default Phonebook;