import React from 'react'
import { Avatar } from '@material-ui/core'
import classes from './SearchSuggestion.module.css'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
const styles = (theme) => {
    return {
        searchSuggestion: {
            display: 'flex',
            justifyContent: "flex-start",
            height: "90%",
            alignItems:"center"
        },
        userNameStyle : {
            paddingLeft:'20%',
        }
    }
}
const searchSuggestion = (props) => {
    return (<Paper className={props.classes.searchSuggestion}>
        <Avatar src={`data:image/jpg;base64,${props.user.avatar}`} />
        <NavLink to={{ pathname: '/third-user', search: `?username=${props.user.username}` }}>
            <span className={props.classes.userNameStyle} onClick={props.reset}>{props.user.username}</span>
        </NavLink>
    </Paper>)
}

export default withStyles(styles)(searchSuggestion);