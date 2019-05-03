import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/instagram-logo.png';

class footer extends Component{

    render(){
        return(
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="https://www.instagram.com/nico.dedicatoria/" target="_blank">
                        <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />
                        {' '}
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="https://www.flickr.com/services/api/" target="_blank">Images are from Flickr API </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
        
    }
}

export default footer;