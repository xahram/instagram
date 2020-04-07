import React from 'react'
import { TextField } from '@material-ui/core'
import useInputState from '../../../hooks/useInputState'
import axios from 'axios'
import { AuthContext } from '../../../hooks/contexts/AuthContext';
const EditForm = (props) => {
    const { updateUser } = React.useContext(AuthContext)
    const { toggle, setToggle, field, propName, userId } = props
    const [value, setValue] = useInputState(field)
    return (<form onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target[0].id)
        const fieldNameForUD = e.target[0].id
        console.log(fieldNameForUD)

        const updatedField = { [fieldNameForUD]: e.target[0].value }
        console.log(updatedField)
        axios.patch(`/update/${userId}`, updatedField)
            .then((res) => {
                if (res.status === 200) {
                    const modifiedUser = { [fieldNameForUD]: res.data[fieldNameForUD] }
                    console.log(res.data[fieldNameForUD])
                    updateUser(modifiedUser)

                }
            })
            .catch((err) => {
                console.log(err)
            })
        setToggle(!toggle)
    }}>
        <TextField
            value={value}
            fullWidth
            autoFocus
            onChange={setValue}
            id={propName}
        // title='Edit User'
        />
    </form>)
}

export default EditForm