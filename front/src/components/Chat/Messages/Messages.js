import React from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Message from './Message/Message'

const styles = (theme) => {
    return {
        root: {
            width: '50%',
            margin: 'auto',
            paddingBottom:'1%'
        }
    }
}
const messages = (props) => {
    return (<Paper className={props.classes.root}>
        {props.messages.map((message) => {
            return <Message type={message.type} text={message.text} />

        })}
    </Paper>)
}

export default withStyles(styles)(messages)