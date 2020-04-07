import React from 'react'
import EditForm from '../EditForm/EditForm'
import OneInfo from './OneInfo/OneInfo'

const UserInfo = (props) => {
    const { state } = props
    const updatedArrayState = Object.keys(state)

    const userData = updatedArrayState.map((val) => {
        if (val === '' || val === 'isAuthenticated' || val === "userId" || val === "file" ||val === "noOfPosts") {
            return;
        }
        //Using key instead of val won't work
        //as key is special word in React 
        //Becoz we were returning many jsx hence key worked
        //But it wont as we are returning single component 
        //so it will treat it as its key to keep track of it 
        //hence wont pass it down to the component resulting in
        //empty field values
        return <OneInfo
            val={val}
            state={state} />
    })
    return userData
}

export default UserInfo