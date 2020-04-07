import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import Person from '@material-ui/icons/Person'
import axios from 'axios'
import { AuthContext } from '../../../hooks/contexts/AuthContext'
import localClasses from './ProfilePic.module.css'
import withStyles from '@material-ui/core/styles/withStyles'
import * as profileTypes from '../../../hooks/componentTypes'
const styles = (theme) => {
    return {
        Picture: {
            width: '96px',
            height: '96px'
        }
    }
}

const ProfilePic = (props) => {
    const { classes } = props
    const { state, updateProfilePicture } = React.useContext(AuthContext)
    // const [file, setFile] = React.useState()

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('avatar', e.target.files[0])

        // const file = e.target[0].files[0]
        axios.post(`/uploads/${state.userId}`, formData)
            .then((res) => {
                // console.log(res)
                updateProfilePicture(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const anchorOnClickHandler = () => {

        const fileInput = document.getElementsByClassName(localClasses.profilePicInput)[0]
        // fileInput.addEventListener('click');
        fileInput.click()
        // fileInput.dispatchEvent('click');
    }
    //use flex display column and then justify content and hide visibilty of input
    const profilePic = props.type === profileTypes.USER_PROFILE ? (<>
        <Avatar className={classes.Picture} src={`data:image/jpg;base64,${props.avatar}`}>
        </Avatar ></>)
        : (<>
            <Avatar className={classes.Picture} src={`data:image/jpg;base64,${state.file}`}>
                {/* <Person /> */}
            </Avatar >
            <Typography variant='h6'>
                <a onClick={anchorOnClickHandler} href='javascript:void(0);'>Upload Picture
        <form id='profilePicForm' onSubmit={submitHandler} enctype="multipart/form-data">
                        <input className={localClasses.profilePicInput} onChange={
                            (e) => {
                                submitHandler(e)
                            }
                        } name='avatar' type='file' />

                    </form>
                </a>
            </Typography>
        </>
        )
    return (<div className={localClasses.ProfilePic}>
        {profilePic}
    </div>
    )
}

export default withStyles(styles)(ProfilePic)