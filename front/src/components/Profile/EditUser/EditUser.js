import React from 'react'
import { AuthContext } from '../../../hooks/contexts/AuthContext'
import UserInfo from '../UserInfo/UserInfo'
import { List } from '@material-ui/core'
import classes from './EditUser.module.css'
const EditUser = (props) => {
    const { state } = React.useContext(AuthContext)
    return (
        <div className={classes.EditUser}>
            <List>
                <UserInfo state={state} />
            </List>
        </div>
    )
}

export default EditUser