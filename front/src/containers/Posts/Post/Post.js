import React from 'react'
import classes from './Post.module.css'
import PicModal from '../../../components/UI/Modal/Modal'
import useToggleHook from '../../../hooks/useTogglerState'
const Post = (props) => {
    const [modalShow, setModalShow] = useToggleHook(false)
    return (<>
    {/* Error Issue 
     Reason Modal inside div tag wouldn't close is becoz
    It had button inside with an onclick on It
    First time when you click on div it would turn show to true
    but next time You re in modal once you click button or backdrop
    to close modal it will trigger onClick on Button but as this 
    Modal is Inside of div which also has onclick it will trigger
    setModalShow function twice first button one then the div one
    hence turning the value back to true for showModal 
    this is why we get two values of modalShow when model is open and
    we click on backdrop to close it or any other way of closing It.
    Try Putting console log in usetogglehook's switchtoggler method to
    see above mentioned  */}
        <div onClick={() => { setModalShow(true) }} className={classes.Post}>
            <img alt='Post' src={`data:image/jpg;base64,${props.url}`} />
        </div>
        <PicModal
            url={props.url}
            show={modalShow}
            onHide={() => { setModalShow(false) }} />
    </>
    )
}

export default Post