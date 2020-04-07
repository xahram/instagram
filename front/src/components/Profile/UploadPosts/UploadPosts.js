import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import axios from 'axios'
import { AuthContext } from '../../../hooks/contexts/AuthContext'
import classes from './UploadPosts.module.css'
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';




const UploadPosts = (props) => {
    const { state } = React.useContext(AuthContext)
    // const [file, setFile] = React.useState()

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('post', e.target.files[0])

        axios.post(`/post/upload/${state.userId}`, formData)
            .then((res) => {
                console.log(res.data)
                // updateProfilePicture(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const anchorOnClickHandler = () => {
        
        const fileInput = document.getElementsByClassName(classes.UploadIcon)[0]
        fileInput.click()
        // fileInput.addEventListener('click');
        // fileInput.dispatchEvent('click');
    }
    return (<div >
        <AddBoxOutlinedIcon onClick={anchorOnClickHandler} />
            <form id='profilePicForm' onSubmit={submitHandler} enctype="multipart/form-data">
                <input className={classes.UploadIcon} onChange={
                    (e) => {
                        submitHandler(e)
                    }
                } name='avatar' type='file' />

            </form>
       
    </div>
    )
}

export default UploadPosts