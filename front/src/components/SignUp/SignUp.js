import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import LockOutlined from '@material-ui/icons/LockOutlined'
import {
    FormControl, FormControlLabel, Typography,
    InputLabel, Input, FormHelperText, Button, Link
} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from './Styles/SignUpStyles'
import useInputState from '../../hooks/useInputState'
import useTogglerState from '../../hooks/useTogglerState'
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import Spinner from '../UI/Layout/Spinner/Spinner'
import { AuthContext } from '../../hooks/contexts/AuthContext'


const SignUp = (props) => {
    const { classes } = props;
    const [loading, toggleLoading] = useTogglerState(false)
    const [valEmail, onChangeEmailHandler] = useInputState('')
    const [valPass, onChangePassHandler] = useInputState('')
    const [valUname, onChangeUnameHandler] = useInputState('')
    const { state, logIn } = React.useContext(AuthContext)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        toggleLoading(true);
        const authData = { username: valUname, email: valEmail, password: valPass };
        axios.post('/users', authData).then((res) => {
            // console.log(res);
            if (res.status === 201) {
                toggleLoading(false);
                logIn(res.data.username,res.data.email,res.data._id)
                props.history.push('/')
            }

        }).catch((err) => {
            // console.log(err)

            console.log(state.isAuthenticated)
            toggleLoading(false);
        });
    }
    let form = (<form onSubmit={onSubmitHandler} className={classes.form}>
        <FormControl className={classes.formcontrol} fullWidth required>
            <InputLabel htmlFor='username'>Username</InputLabel>
            <Input value={valUname} onChange={onChangeUnameHandler} disableUnderline id='text' type='text' name='username' autoFocus></Input>
        </FormControl>
        <FormControl className={classes.formcontrol} fullWidth required>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input value={valEmail} onChange={onChangeEmailHandler} disableUnderline type='email' id='email' name='email' disableUnderline></Input>
            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl className={classes.formcontrol} fullWidth required>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input value={valPass} onChange={onChangePassHandler} placeholder='password' disableUnderline type='password' id='password' name='password' disableUnderline></Input>
        </FormControl>
        <Typography color='textSecondary' variant="body2">Already have an account?
        <NavLink to="/" >Click Here</NavLink>
        </Typography>
        <Button className={classes.submit}
            variant='contained'
            fullWidth
            color='secondary'
            type='submit'>Sign Up</Button>
    </form>)
    if (loading) {
        form = <Spinner />
    }
    return (<div className={classes.main}>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}><LockOutlined /></Avatar>
            <Typography variant='h4'>Sign Up</Typography>
            {form}
        </Paper>
    </div>);
}

export default withStyles(styles)(SignUp) 