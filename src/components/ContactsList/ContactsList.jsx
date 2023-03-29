import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import ListItem from '../ListItem/ListItem'
import { ListOfContacts } from './ContactList.styled'

function ContactsList() {

    const contacts = useSelector(getContacts)
    const filterQuery = useSelector(getFilter);

    const filteredContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    console.log(contacts)
    return (
        < ListOfContacts >
            {
                filteredContact.map(contact => {
                    return (
                        <ListItem key={contact.id} id={contact.id} name={contact.name} number={contact.phone} />
                    )
                })
            }
        </ ListOfContacts>
    );
}

export default ContactsList;