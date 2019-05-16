import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import api from '../api/Api';

import Header from '../components/Header';
import About from './about/About';
import Main from './main/Main';
import Footer from './Footer';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Routing.css';

class routing extends Component{
    state = {
      searchItem: 'Singapore'
    }

    handleClick = (e) => {
    
        e.preventDefault();
        let w = window.innerWidth;
        if(w < 900) document.getElementById('navbar-toggle').click();
        document.getElementById('btnClick').click();

    }

    searchQueryBTN = () => {
        let targetValue = document.getElementById('searchInput').value;
        let windowPath = window.location.pathname;
        
        if(windowPath === '/about')
            document.getElementById('home-link').click();

        axios.get(api+targetValue)
            .then(response => {
            this.setState({
                imageData: response.data.photos,
                searchItem: targetValue,
                isActive: true
            });
        });
    }

    clearInput = () => {
        document.getElementById('searchInput').value='';
    }

    render(){
        return(
            <div>
                <Header title={this.state.searchItem}/>
                <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className="navbar_styling">
                    <Navbar.Brand href="/">ReactJS Search</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Link to="/" id="home-link" className="nav-link">Home</Link>
                        <Nav.Link href="https://nicz-portfolio.000webhostapp.com" target="_blank">Portfolio</Nav.Link>
                        <Link to="/about" className="nav-link">About Me</Link>
                        </Nav>
                        <Form onSubmit={this.handleClick} inline>
                        <FormControl type="text" id="searchInput" placeholder={this.state.searchItem} onFocus={this.clearInput} autoComplete="off"  className="mr-sm-2" />
                        <Button onClick={this.searchQueryBTN} id="btnClick" variant="info" className="navbarBtnStyling">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Route path="/" exact component={() => <Main searchItem={this.state.searchItem} />} />
                <Route path="/about" component={About} />
                <Footer />
            </div>
        )
        
    }
}

export default routing;