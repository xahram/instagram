import React from 'react';
import { AuthContext } from '../../hooks/contexts/AuthContext'
import Post from './Post/Post'
import classes from './Posts.module.css'
import * as profileTypes from '../../hooks/componentTypes'
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios'
class Posts extends React.Component {
    static contextType = AuthContext
    state = {
        posts: [],
        errorMessage: '',
        currentPage: 1,
        todosPerPage: 9

    }
    //shouldcomponentupdate use
    // shouldComponentUpdate(nextProps, nextState) {
    //Method 1 Try this might work
    // if (this.props.type === profileTypes.USER_PROFILE) {
    //nextProps.posts.length !== nextState.posts.length
    //? this.setState({ posts: nextProps.posts })
    //: null
    //       return nextProps.posts !== this.props.posts
    //}
    //return true

    //Method 2 Below didn't work
    //     if (this.props.type === profileTypes.USER_PROFILE) {
    //         console.log(nextProps.posts)

    //         return nextProps.posts.length !== nextState.posts.length
    // this.setState((prevState, props) => {
    //     if (nextProps.posts.length !== this.state.posts.length) {
    //         return {
    //             posts: props.posts
    //         }
    //     }
    // })
    //     }
    // }
    componentDidMount() {
        let value = this.context;
        if (this.props.type === profileTypes.USER_PROFILE) {
            console.log(this.props)
            this.setState((prevState, props) => {
                console.log(prevState, props.posts)

            })
        } else {

            axios.get(`/posts/${value.state.userId}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        this.setState({ posts: res.data })
                    }
                    else {
                        this.setState({ errorMessage: 'unable to load your posts' })
                    }

                })
                .catch((err) => {
                    this.setState({ errorMessage: `Check Your Internet Connection Or Try Later ${err}` })
                })
        }

    }
    handleChange = (e, currentpageNumber) => {
        this.setState({ currentPage: currentpageNumber })
    }
    render() {
        const { currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentPosts = this.state.posts.slice(indexOfFirstTodo, indexOfLastTodo);

        let checkPost = <p>No Posts Yet</p>
        let fetchedPosts = currentPosts.map((post) => {
            return <Post url={post} />
        })
        // let fetchedPosts = this.state.posts.map((post) => {
        //     return <Post url={post} />
        // })
        return (
            <>
                {this.state.posts.length === 0 ? checkPost : null}
                {this.state.errorMessage}
                <div className={classes.Posts}>
                    {fetchedPosts}
                </div>
                <Pagination
                    count={Math.ceil(this.state.posts.length / this.state.todosPerPage)}
                    page={this.state.currentPage}
                    onChange={this.handleChange}
                    color="secondary" />
            </>
        );
    }
}

export default Posts