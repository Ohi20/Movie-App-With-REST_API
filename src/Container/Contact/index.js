import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
        {name:'Facebook', link:'https://www.facebook.com/ashraf.ohi.1', text:'Follow to my facebook-'},
        {name:'Linkedin', link:'https://www.linkedin.com/in/ashraf-ohi-a92b70133/', text:'Follow to my linkedin-'},
        {name:'Twitter', link:'https://twitter.com/?lang=en', text:'Follow to my twitter-'},
        {name:'StackOverFlow', link:'https://stackoverflow.com/users/18395386/ashrafohi', text:'Check out to my stackoverflow account-'},
        {name:'Blog', link:'', text:'No blogs yet.'},
        {name:'GitHub', link:'https://github.com/Ohi20', text:'Follow to my github account-'},
        {name:'YouTube', link:'https://youtu.be/K3ncDbwIv8I', text:'Follow to my youtube channel-'},
        {name:'Email', link:'ashrafohi20@gmail.com',  text:'Write to me a mail:'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH ME</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
                    <ul className='socialIconsList'>
                        <li>
                            <a rel="noreferrer" href="https://www.facebook.com/ashraf.ohi.1" target="_blank">
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/ashraf-ohi-a92b70133/" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://twitter.com/?lang=en" target="_blank">
                                <BsTwitter />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://stackoverflow.com/users/18395386/ashrafohi" target="_blank">
                                <BsStackOverflow />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://google.com/" target="_blank">
                                <BsGoogle />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://github.com/Ohi20" target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://youtu.be/K3ncDbwIv8I" target="_blank">
                                <BsYoutube />
                            </a>
                        </li> 
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;