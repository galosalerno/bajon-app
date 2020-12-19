import logo from './logo.svg';
import './App.css';
import BarNav from './Componentes/BarNav';
import Menu from './Componentes/Menu';
import React, { Fragment,Conteiner,useState } from 'react';
import {Col,Row,Image,Navbar,MyVerticallyCenteredModal,Button} from 'react-bootstrap';
import imagen3 from './Assets/extracheese.jpg';
import Baconeitor from './Componentes/Burgers/Baconeitor';
import Onion from './Componentes/Burgers/Onion';
import Extracheese from './Componentes/Burgers/Extracheese';
import CodigoQR from './Componentes/CodigoQR';
import Promociones from './Promociones';

function App() {
  
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>

        <BarNav/>
        
        <br/>
        <Row>
            <div className="promos">
                <Promociones/>  
            </div>
        </Row>
        <Row>
            <div className="inicio">
              <Button variant="warning" onClick={() => setModalShow(true)}>
                  Generar QR
              </Button>
              <CodigoQR
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
        </Row> 
        
        <Row>
            <Col>
              <Baconeitor/>
            </Col>
            <Col>
              <Onion/>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col>
              <Extracheese/> 
          </Col>
        </Row>
        
        
    </Fragment>
    
  );
}

export default App;
