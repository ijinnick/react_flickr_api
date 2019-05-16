import React, {Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileWink } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import prof_pic from '../../assets/profile_pic.jpg';

import './About.css';

const about = () => {

    let windowHeight = document.documentElement.scrollHeight;

    return (
        <Fragment>
            <Jumbotron className="about_jumbotron_styling">
                <h1>Hellooo, Thanks for viewing my profile!</h1>
                <p className="lead">Hope you don't mind to add me on my social media accounts. <FontAwesomeIcon  icon={faSmileWink} /> </p>
                <hr className="my-4" />
                <p>click this button to scroll to bottom</p>
                <p>
                    <Button onClick={() => window.scrollTo({top: windowHeight, left: 0, behavior: "smooth"}) } variant="primary">Click me!</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={4} className="move_div">
                        <Card className="about_card_styling">
                            <Card.Img variant="top" src={prof_pic} />
                            <Card.Body>
                            <Card.Title>Nico Dedicatoria</Card.Title>
                            <Card.Text>
                                Web Developer @ AwesomeOS <br/>
                                Email: ijinnick@yahoo.com <br/>
                                Mobile SG: +65 8221 8516 <br/>
                                Skype: ijinnick@live.com <br/>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={8} className="move_div2">
                        <Jumbotron className="about_jumbotron_styling2">
                            <ListGroup.Item as="li" active>
                                Technologies that I'm using
                            </ListGroup.Item>
                            <Row>
                                <Col>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="about_list_group">ReactJS</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">Bootstrap</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">Javascript</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">Flickr API</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">CodeIgniter</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">JSX</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">Axios</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">Redux</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="about_list_group">PHP</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">JSON</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">jQuery</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">AJAX</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">HTML/HTML5</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">CSS/CSS3</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">MySQL</ListGroup.Item>
                                        <ListGroup.Item className="about_list_group">GitHub</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default about;