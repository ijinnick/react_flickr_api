import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './NavBar.css';

class navbar extends Component{

     handleClick = (e) => {
        e.preventDefault();
        document.getElementById('btnClick').click();
      }

    render(){
        return(
            <div>
                <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#home">ReactJS Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="https://nicz-portfolio.000webhostapp.com" target="_blank">Portfolio</Nav.Link>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    </Nav>
                    <Form onSubmit={this.handleClick} inline>
                    <FormControl type="text" id="searchInput" placeholder={this.props.searchResult} autoComplete="off"  className="mr-sm-2" />
                    <Button onClick={this.props.search} id="btnClick" variant="outline-light" className="navbarBtnStyling">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
        
    }
}

export default navbar;