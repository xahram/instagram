import React from 'react'
import classes from './NavigationItem.module.css'
import { Link } from 'react-router-dom'
const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <Link to={props.link}>{props.children}</Link>
        </li>
    )
}
export default navigationItem