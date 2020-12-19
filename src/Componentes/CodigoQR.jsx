import React from 'react';
import {Col,Row,Image,Badge,Button,Modal} from 'react-bootstrap';
import '/Users/micaelapaniagua/Desktop/bajon-app/src/App.css';


const CodigoQR = (props) =>{
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Codigo QR
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Promocion</h4>
            <img src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024.jpg" width="80px" height="80px"/>
            <p>
                valido hasta el 31/12/2020
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide} variant="outline-warning">Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default CodigoQR;