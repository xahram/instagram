import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import InstagramImageLogo from '../../assets/index.png'
import classes from './Navbar.styles.js'
import { Avatar } from '@material-ui/core'
const navbar = (props) => {
    return (<>
        <Navbar className={classes.navbar} bg="light" expand="lg">

            <Navbar.Brand href="#home"><img
                src={InstagramImageLogo}
                width="220"
                height="52"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            /></Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
            </Form>
            <Avatar className='' src={`data:image/jpg;base64,${props.avatar}`}>
            </Avatar >
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
            {/* </Nav>
            
            </Navbar.Collapse> */}
        </Navbar>
        {/* <Navbar classname={classes.Navbar} bg="light" variant="light">
            <div>
                <img alt='Instagram'
                    src={InstagramImageLogo}
                    className="d-inline-block align-top" />
            </div>
            <FormControl>
                <Input onChange='' type='text' value='Search' placeholder='Search...' />
            </FormControl>
        </Navbar> */}
    </>)
}

export default navbar