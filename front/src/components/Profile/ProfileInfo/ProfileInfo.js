import React from 'react'
import Username from './Username/Username'
import FollowerCount from './FollowerCount/FollowerCount'
import classes from './ProfileInfo.module.css'
import Bio from './Bio/Bio'
import { AuthContext } from '../../../hooks/contexts/AuthContext'
import * as profileType from '../../../hooks/componentTypes'
const ProfileInfo = (props) => {

    const { state } = React.useContext(AuthContext)
    const profileInfo = props.type === profileType.USER_PROFILE ?
        (<>
            <Username type={props.type} history={props.history} username={props.username} />
            <FollowerCount noOfPosts={props.noOfPosts} />
            <Bio bio={props.bio} />
        </>) : (<>
            <Username history={props.history} username={state.username} />
            <FollowerCount noOfPosts={state.noOfPosts} />
            <Bio bio={state.bio} />
        </>)
    return (<div className={classes.ProfileInfo}>
        {profileInfo}
    </div>)
}

export default ProfileInfo