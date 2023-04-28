import React from 'react';
import Card from 'react-bootstrap/Card';
import storyme from '../../Assets/images/storyme.JPG';

const AboutContainer = ()=>{

    return (
        <div className='d-flex justify-content-center align-items-center'>       
    <Card className='my-5 text-center' style={{ width: '20rem' ,height:'45rem' }}>
      <Card.Img variant="top" src={storyme} style={{ width: '20rem' ,height:'30rem' }} />
      <Card.Body>
        <Card.Title>Ashraf Ohi</Card.Title>
        <Card.Text className='text-xl text-capitalize font-weight-bold'>
        Talking about dreams is like talking about movies, since the cinema uses the language of dreams; years can pass in a second, and you can hope from one place to another. It's a language made of image. And in the real cinema, every object and every light means something, as in a dream.
        </Card.Text>
      </Card.Body>                        
    </Card>
    </div> 
  );



}

export default AboutContainer;