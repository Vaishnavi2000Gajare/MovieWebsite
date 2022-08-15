import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Auth/Header'
import Card from 'react-bootstrap/Card';


export default function LoveThunder() {
  return (
    <div style={{backgroundColor:'black'}}>
        <Header/>
        <Container style={{marginTop:'80px'}}>
      <Row>
        <Col xs={3}>
        <img src='https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg'/>
        </Col>
        <Col xs={5}>
            <h3 style={{color:'white'}}>Thor: Love and Thunder </h3>
            <h5 style={{color:'green'}}>Rating:7.2</h5>
            <h6 style={{color:'white'}}>96 min</h6>
            <h6 style={{color:'white'}}>Release Date:Thu Sep 30 2021</h6>
           
        </Col>
        <Col xs={4}>
          <img src='data:image/jpeg;base64,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' height='100%' width='110%'></img>
        </Col>
       
      </Row>
      <Row>
        <Col xs={9}>
          <h1 style={{color:'white'}}>Overview</h1>
          <p style={{color:'white'}}>After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.</p>
        </Col>

        
      </Row>
      
    </Container>
    <h4 style={{color:'white'}}>Cast</h4>
   
      <Row>
        <Col sm={2}>
        <Card style={{ width: '10rem', backgroundColor:'black',marginLeft:'8px' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w138_and_h175_face/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg"  style={{height:'40%' , backgroundColor:'black'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white'}}>
        Chris Hemsworth
        </Card.Text>
        <Card.Text style={{color:'white'}}>
        Thor Odinson
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>

        <Col sm={2}>
        <Card style={{ width: '10rem', backgroundColor:'black',marginLeft:'8px' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w138_and_h175_face/qCpZn2e3dimwbryLnqxZuI88PTi.jpg"  style={{height:'40%' , backgroundColor:'black'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white'}}>
        Christian Bale
        </Card.Text>
        <Card.Text style={{color:'white'}}>
        Gorr
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>

        <Col sm={2}>
        <Card style={{ width: '10rem', backgroundColor:'black',marginLeft:'8px' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w138_and_h175_face/fycqdiiM6dsNSbnONBVVQ57ILV1.jpg"  style={{height:'40%' , backgroundColor:'black'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white'}}>
        Tessa Thompson
        </Card.Text>
        <Card.Text style={{color:'white'}}>
        King Valkyrie
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>

        <Col sm={2}>
        <Card style={{ width: '10rem', backgroundColor:'black',marginLeft:'8px' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w138_and_h175_face/tQeioTj98JxIXldV9yDSUXNt3KY.jpg"  style={{height:'40%' , backgroundColor:'black'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white'}}>
        Taika Waititi
        </Card.Text>
        <Card.Text style={{color:'white'}}>
        Korg / Old Kronan God (voice)
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col sm={2}>
        <Card style={{ width: '10rem', backgroundColor:'black',marginLeft:'8px' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w138_and_h175_face/j2QymoyJwYumzQ65o6mFhAe2lE5.jpg"  style={{height:'40%' , backgroundColor:'black'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white'}}>
        Natalie Portman
        </Card.Text>
        <Card.Text style={{color:'white'}}>
        Jane Foster / The Mighty Thor
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col sm={2}>
        <Card style={{ width: '10rem', backgroundColor:'black',marginLeft:'8px' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w138_and_h175_face/hO8ADSA0sKnO3VkPjwA7MZE7r5W.jpg"  style={{height:'40%' , backgroundColor:'black'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{color:'white'}}>
        Jaimie Alexander
        </Card.Text>
        <Card.Text style={{color:'white'}}>
        Sif
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
      </Row>
    
    </div>
  )
}
