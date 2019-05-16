import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';

library.add(fab);

class footer extends Component{

    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="https://www.facebook.com/nicz.zite" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'facebook']} className="icon_rotate" size="2x"/>
                    </Navbar.Brand>
                    <Navbar.Brand href="https://www.instagram.com/ijinnick/" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'instagram']} className="icon_rotate" size="2x"/>
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