import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';
import { ListItemLi, PhoneNumber, DeleteBtn } from './ListItem.styled'

const ListItem = ({ id, name, number }) => {
    const dispatch = useDispatch()

    return (
        <ListItemLi>{name}
            <PhoneNumber>{number}</PhoneNumber>
            <DeleteBtn onClick={() => dispatch(deleteContact(id))} type='button'>delete</DeleteBtn>
        </ListItemLi>
    )
}

export default ListItem

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}