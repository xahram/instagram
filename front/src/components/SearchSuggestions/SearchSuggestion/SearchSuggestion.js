import React from 'react'
import { Avatar } from '@material-ui/core'
const searchSuggestion = (props) => {
    return (<div>
        <Avatar /><span>{props.user.username}</span>
    </div>)
}

export default searchSuggestion