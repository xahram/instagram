import React from 'react'
import { Button } from 'react-bootstrap'
import classes from './Username.module.css'
import * as profileType from '../../../../hooks/componentTypes'
import TopBarProgress from "react-top-loading-bar";

const Username = (props) => {

    const [show, setShow] = React.useState(false)
    const onClickHandler = () => {

        props.history.push('/edit-user')
        // setShow(false)
    }
    return (
        <div className={classes.Username}>
            <span><strong>{props.username ? props.username : 'Username'}</strong></span>

            {props.type === profileType.USER_PROFILE ?
                <Button variant='primary'>Follow</Button>
                : <Button onClick={onClickHandler} variant='outline-info'>Edit Profile</Button>
            }
            
        </div>
    )
}

export default Username