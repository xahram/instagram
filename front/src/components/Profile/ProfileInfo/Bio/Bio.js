import React from 'react'
import classes from './Bio.module.css'

const Bio = (props) => {
    return (
        <div className={classes.Bio}>
            <span><strong>{props.bio}</strong></span>
        </div>
    )
}

export default Bio