import React from 'react'

export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
    const [state, setState] = React.useState({
        isAuthenticated: false,
        username: '',
        email: '',
        userId: '',
        file: '',
        noOfPosts: '',
        bio: ''
    })

    const deleteAndLogoutUser = () => {
        setState({
            ...state,
            isAuthenticated: false,
            username: '',
            email: '',
            userId: '',
            file: '',
            noOfPosts: '',
            bio: '',
            token: ''
        })
    }
    const updateProfilePicture = (profilePic) => {
        setState({
            ...state,
            file: profilePic
        })
    }
    const updateUser = (userData) => {
        setState({
            ...state,
            ...userData
        })
    }
    const logIn = (username, email, id, profilePic, noOfPosts, bio, token) => {
        setState({
            ...state, isAuthenticated: true,
            username: username,
            email: email,
            userId: id,
            file: profilePic,
            noOfPosts: noOfPosts,
            bio: bio,
            token: token

        },function(){
            localStorage.setItem('token', state.token)      
        })
        // localStorage.setItem('token', token)
    }
    return (
        <AuthContext.Provider value={{ state, logIn, deleteAndLogoutUser, updateUser, updateProfilePicture }}>
            {props.children}
        </AuthContext.Provider>
    )
}

