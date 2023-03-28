import { useDispatch } from "react-redux";
import { filterQuery } from 'redux/filterSlice';
import { Text, FindInput } from './Filter.styled'

function Filter() {

    const handleGeyValue = (e) => {
        dispatch(filterQuery(e.currentTarget.value))
    }

    const dispatch = useDispatch()

    return <label>
        <Text>Find contact by name</Text>
        <FindInput onChange={handleGeyValue} name="filter" type="text" />
    </label>
}

export default Filter;


