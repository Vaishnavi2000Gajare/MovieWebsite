import React from 'react'
import Header from '../Auth/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Upcoming() {
  return (
    <div style={{backgroundColor:'black'}}>
        <Header/>
       <Container style={{marginTop:'80px'}}>
      
      <Row>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
    <Link to='/love'>  <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Spider-Man: No Way Home
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
      <Link to='/nope'><Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/xIGr7UHsKf0URWmyyd5qFMAq4d8.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Dragon Ball Super: Super Hero
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:6.8
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/love'> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/vWLyXOFm1C3gnS8ksfqi7gwkijn.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        After Ever Happy
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/nope'> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/K9aPSBOcTVUePbv4AAKffdoaq8.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Gigi & Nate
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
    <Link to='/love'>  <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/uGAB535HRTbYAmnTBSlKpodivR.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Carnivore
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/nope'> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/wz3VaAjw8M9LJ4yVJN7jUHWHJgW.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Thiruchitrambalam
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:6.8
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
      <Link to='/love'><Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/lhOCjQOmcXqz3bR9YEOtvQPLU5F.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Honk for Jesus. Save Your Soul.
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
    <Link to='/nope'>  <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/khpHJdy9ydrz6KOiwbfjWTcLxXj.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        GIRLIEN
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
