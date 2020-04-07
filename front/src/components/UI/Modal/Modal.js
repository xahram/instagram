import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import classes from './Modal.module.css'
const BootstrapModal = (props) => {
    const modal = props.simple ? (<Modal show={props.show} onHide={props.onHide}>
       
        <Modal.Header closeButton>
            <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
                No
          </Button>
            <Button variant="primary" onClick={props.deleteUser}>
                Yes
          </Button>
        </Modal.Footer>
    </Modal>) : (
            <Modal
                // backdrop='static'
                //here goes props.show
                // show={props.show}
                // onHide={props.onHide}
                {...props}
                dialogClassName={classes.ModalSizing}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                // centered
            >
                {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Post
          </Modal.Title>
            </Modal.Header> */}
                <Modal.Body className={classes.ModalBody}>

                    <div className={classes.postSizing}>
                        <img alt='Post' src={`data:image/jpg;base64,${props.url}`} />
                    </div>
                    <div>
                        <div>Comments and like</div>
                        
                    </div>

                </Modal.Body>
                {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
            </Modal>
        );
    return modal
}

export default BootstrapModal



