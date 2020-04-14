import React from 'react'
import InstagramImageLogo from '../../assets/index.png'
// import classes from './Navbar.module.css'
import { Avatar, AppBar, Toolbar, IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import styles from './Navbar.styles'
import InputBase from '@material-ui/core/InputBase'
import { CardMedia } from '@material-ui/core';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions'
import useInputState from '../../hooks/useInputState'
import axios from 'axios'
const Navbar = (props) => {
    const { classes } = props;
    const [value, setValue] = useInputState()
    const [users, setUser] = React.useState([])
    React.useEffect(() => {
        if (value.length >= 3) {
            //here user = {username:response.data.username,avatar:response.data.avatar}
            //setUser(user)
            axios.get('/searchUser/value')
                .then((res) => { console.log(res) })
                .catch((err) => { console.log(err) })
            console.log('request sent')
        }
    }, [value])
    return (
        <div>
            <AppBar className={classes.appBar} color='default' position="static">
                <Toolbar className={classes.toolbar}>
                    <CardMedia className={classes.cardMedia}>
                        <img className={classes.cardMediaImage} src={InstagramImageLogo} alt='instagram' />
                    </CardMedia>
                    <div className={classes.search}>
                        {/* <div className={classes.searchIcon}>
                            <Search />
                        </div> */}
                        <InputBase value={value} onChange={setValue} placeholder='Search...' classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }} />
                        <SearchSuggestions users={users} />
                    </div>
                    <IconButton edge="start" className={classes.avatarButton} color="inherit" aria-label="menu">
                        <Avatar />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Navbar)