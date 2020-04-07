import React from 'react'
import classes from './FollowerCount.module.css'
import { AuthContext } from '../../../../hooks/contexts/AuthContext'
const FollowerCount = (props) => {
    return (<div className={classes.Follower}>
        <span><strong>{props.noOfPosts ? props.noOfPosts : '0'}: Posts</strong></span>
        <span><strong>0 : Followers</strong></span>
        <span><strong>0 : Followimg</strong></span>
    </div>)
}

export default FollowerCount