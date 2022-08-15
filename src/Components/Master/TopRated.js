import React from 'react'
import Header from '../Auth/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function TopRated() {
  return (
    <div style={{backgroundColor:'black'}}>
        <Header/>
       <Container style={{marginTop:'80px'}}>
      
      <Row>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
    <Link to='/love'>  <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Dilwale Dulhniya le Jayenge
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/nope'> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        The Shawshank Redemption
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.8
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/love'> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        The Godfather
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:8.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/love'> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       The GodFather 2
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:8.2
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
    <Link to='/nope'>  <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/4JyNWkryifWbWXJyxcWh3pVya6N.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        purple Heart
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
     <Link to='/love'> <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/q719jXXEzOoYaps6babgKnONONX.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Your Name
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:6.8
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
      <Link to='/love'><Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/cVn8E3Fxbi8HzYYtaSfsblYC4gl.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Your Eye Tell
        </Card.Text>
        <Card.Text style={{color:'white',textAlign:'center'}}>
       Rating:7.2
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', backgroundColor:'black' }}>
   <Link to='/love'>   <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/pJKy1yvnKh8UjcuYeG3Rt35xHFA.jpg"  style={{height:'40%' , backgroundColor:'black'}}/></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white',textAlign:'center'}}>
        Burn the Stage: The Movie
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
