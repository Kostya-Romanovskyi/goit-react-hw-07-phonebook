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

    return (
        <ListOfContacts>
            {
                filteredContact.map(contact => {
                    return (
                        <ListItem key={contact.contactID} id={contact.contactID} name={contact.name} number={contact.number} />
                    )
                })
            }
        </ListOfContacts>
    );
}

export default ContactsList;