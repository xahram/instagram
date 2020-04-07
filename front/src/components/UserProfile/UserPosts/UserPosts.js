import React from 'react'
import Post from '../../../containers/Posts/Post/Post'
import classes from './UserPosts.module.css'
const userPosts = (props) => {
    let checkPost = <p>No Posts Yet</p>
    let fetchedPosts = props.posts.map((post) => {
        return <Post url={post} />
    })
    return (<div className={classes.UserPosts}>
        {props.posts.length === 0 ? checkPost : null}
        {fetchedPosts}
    </div>)
}

export default userPosts