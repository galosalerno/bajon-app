import imagen2 from '/Users/micaelapaniagua/Desktop/bajon-app/src/Assets/onion.jpg';
import React, { Fragment,Conteiner,useState} from 'react';
import {Col,Row,Image,Badge,Button,ButtonGroup,Alert} from 'react-bootstrap';
import '/Users/micaelapaniagua/Desktop/bajon-app/src/App.css';

const Onion = () => {

const[precio,cambiarPrecio] = useState(0);
const[nombre,cambiarNombre] = useState("");
const [cantMedallones,sumarMedallon] = useState(0);

const sumar = () =>{
    if(cantMedallones<4){
        sumarMedallon(cantMedallones+1)
    }
    else{
     <Alert>cantidad maxima</Alert>
    }
    
}
    return (
        <Fragment>
            <div className="burgers">
                <Badge variant="light">
                    <Image src={imagen2} width="100px" height="100px"  roundedCircle/> 
                    <br/>
                    <div className="descripcion">Onion Burger {nombre}</div>
                    <p>_______________________</p>
                    <p>Carne X {cantMedallones} 
                    &nbsp; &nbsp;<ButtonGroup aria-label="Third group">
                              <div className="botoncito">
                                <Button 
                                    variant="outline-warning"
                                    onClick={sumar}
                                >   +
                                </Button>
                              </div>
                            
                        </ButtonGroup> 
                    </p>
                    <p>Cheddar</p>
                    <p>Cebolla Caramelizada</p>
                    <p>Pan de papa</p>
                    <p>${precio}</p>
                    
                </Badge>
            </div>
        </Fragment>
        
    )
    
}

export default Onion;