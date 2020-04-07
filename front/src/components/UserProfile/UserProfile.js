import React from 'react'
import UserInfo from '../Profile/ProfileInfo/ProfileInfo'
import UserProfilePic from '../Profile/ProfilePic/ProfilePic'
import UserPosts from './UserPosts/UserPosts'
import axios from 'axios'
import * as profileTypes from '../../hooks/componentTypes'
import classes from './UserProfile.module.css'
export default class UserProfile extends React.Component {
    state = {
        username: '',
        userProfilePic: '',
        noOfPosts: '',
        bio: '',
        posts: []
    }
    componentDidMount() {
        //here send the request to fill the above 
        // states and pass them down to below components
        let username = ''
        const query = new URLSearchParams(this.props.location.search)
        for (let params of query.entries()) {
            // console.log(params)
            username = params[1]
        }
        axios.get(`/otherUserProfile/${username}`)
            .then((res) => {

                this.setState({
                    userProfilePic: res.data.avatar,
                    username: res.data.username,
                    bio: res.data.bio,
                    posts: res.data.posts,
                    noOfPosts: res.data.noOfPosts,

                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        // console.log(this.state.posts)
        return (<><div className={classes.UserProfile}>
            <UserProfilePic
                avatar={this.state.userProfilePic}
                type={profileTypes.USER_PROFILE} />
            <UserInfo
                username={this.state.username}
                bio={this.state.bio}
                noOfPosts={this.state.noOfPosts}
                type={profileTypes.USER_PROFILE} />

        </div>
            <UserPosts

                posts={this.state.posts}
                type={profileTypes.USER_PROFILE} /></>)
    }
}