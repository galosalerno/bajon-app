import imagen1 from '/Users/micaelapaniagua/Desktop/bajon-app/src/Assets/baconeitor.jpg';
import React, { Fragment,Conteiner,useState } from 'react';
import {Col,Row,Image,Badge,Button} from 'react-bootstrap';
import '/Users/micaelapaniagua/Desktop/bajon-app/src/App.css';

const Baconeitor = () => {

const[precio,cambiarPrecio] = useState(0);

const[nombre,cambiarNombre] = useState("");

const doble = () =>{
    cambiarPrecio(200)
    cambiarNombre("Doble") 
}
const triple = () =>{
    cambiarPrecio(300)
    cambiarNombre("Triple")
}
    return (
        <Fragment>
            <Badge variant="light">
                <Image src={imagen1} width="100px" height="100px"  roundedCircle/> 
                <br/>
                <div className="descripcion">Baconeitor Burger {nombre}</div>
                <p>_______________________</p>
                <p>Medadallon de 120g</p>
                <p>Cheddar</p>
                <p>Bacon Ahumado</p>
                <p>Pan de Queso</p>
                <p>${precio}</p>

               <Button
                    onClick={doble}
                    variant="outline-warning"
               >
                 Doble   
                </Button>    
                &nbsp;
                <Button
                    onClick={triple}
                    variant="outline-warning"
               >
                 Triple   
                </Button>  
            </Badge>
        </Fragment>
    )
}

export default Baconeitor;


 