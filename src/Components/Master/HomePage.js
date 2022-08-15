import React from 'react'
import Header from '../Auth/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
   
    <div style={{backgroundColor:'black'}}>
       <Header/>
       <Container style={{marginTop:'80px'}}>
      
      <Row>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
   <Link to='/love' style={{textDecoration:'none'}}>   <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Thor: Love and Thunder
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/nope' style={{textDecoration:'none'}}> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Nope
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:6.8
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/nope'style={{textDecoration:'none'}}> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/jrcPXIp6nw9KXzN6OhsXHinI0AR.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Bodies Bodies Bodies
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:8.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/nope'> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/n1el846gLDXfhOvrRCsyvaAOQWv.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Where the Crawdads Sing
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>

    <Container style={{marginTop:'80px'}}>
      
      <Row>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/love'> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/96QNGHUxxA45c4q6bdr1T0NO0yD.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        My Favorite GirlFriend
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/nope'> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Bullet Train
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:6.8
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
      <Link to='/love'><Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/rS8fGGgs9panboG1ZVGS6CFzXJM.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Laal Singh Chaddha
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
      <Link to='/nope'><Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/wqMcyJjacNB8JvzcamwD3CBIkG0.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Mack & Rita
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
