import React from 'react'
import { Paper } from '@material-ui/core'
import Message from './Message/Message'
const messages = (props) => {
    return (<Paper>
        {props.messages.map((message) => {
            return <Message type={message.type} text={message.text}/>

        })}
    </Paper>)
}

export default messages