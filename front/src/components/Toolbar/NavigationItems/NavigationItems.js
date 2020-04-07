import React from 'react';
import Typography from '@material-ui/core/Typography/Typography'
import classes from './NavigationItems.module.css'
import { Link } from 'react-router-dom'
import NavigationItem from './NavigationItem/NavigationItem';
const navItems = (props) => {
    return (
        <nav>
            <NavigationItem link='/'>Test</NavigationItem>
            <li><a href=''><Typography variant='h6'>News</Typography></a></li>
            <li><a href='/'><Typography variant='h6'>Uploading</Typography></a></li>
            <li><a href='/'><Typography variant='h6'>Price</Typography></a></li>
            <li><a href='/'><Typography variant='h6'>Featured</Typography>
                <div className={classes.Hoverbar}>
                    <li><Link to='/items'>Items</Link></li>
                    <li><a href='/'><Typography variant='h6'>Pricings</Typography></a></li>
                    <li><a href='/'><Typography variant='h6'>Company News</Typography></a></li>
                </div>
            </a></li> 
        </nav>
    );
}
export default navItems