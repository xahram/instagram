import React from 'react'
import { Avatar } from '@material-ui/core'
import classes from './SearchSuggestion.module.css'
import {Paper} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
const styles = (theme)=>{
    return {
        searchSuggestion : {
            display : 'flex',
            justifyContent:"start",
            height: "90%"
        }
    }
}
const searchSuggestion = (props) => {
    return (<Paper className={props.classes.searchSuggestion}>
        <Avatar src={`data:image/jpg;base64,${props.user.avatar}`}/><span>{props.user.username}</span>
    </Paper>) 
}

export default withStyles(styles)(searchSuggestion);