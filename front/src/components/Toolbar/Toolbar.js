import React from 'react'
import Appbar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import classes from './Toolbar.module.css'
import NavigationItems from './NavigationItems/NavigationItems'
const navbar = (props) => {
    return (<Appbar postion='fixed' color='primary' className={classes.Bar}>
        <Toolbar>
            <ul className={classes.ListStyle}>
               <NavigationItems />
            </ul>
                    <div className={classes.DivFlex}></div>
                    <div className={classes.Search}>
                        <div className={classes.SearchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search...' classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }} />
                    </div>
        </Toolbar>
    </Appbar>);
        }
export default navbar;