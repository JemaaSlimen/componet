import React from 'react';

/*
import Social from './Social';

import {Form, Button} from 'react-bootstrap';
*/


import './style.css';
import { Adress } from './component/Adress';
import { Photo } from './component/Photo';
import Name from './component/Name';
import { Card, Col, Row } from 'react-bootstrap';

function App() {
  
    
  return (
    <div className="App" bg-primary>
    
      <div className="navbar bg-primary">   
         <h1 style={{color:"red",fontSize:50 }} >CV</h1>   
          </div>
 


        <div>
       
 
        <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Photo variant="top" src="holder.js/100px160" />
        <Card.Body>
         <Name/>
          <Adress/>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

    
        </div>
        

</div>

);
  }

export default App;
