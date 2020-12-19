import imagen from '/Users/micaelapaniagua/Desktop/bajon-app/src/Assets/extracheese.jpg';
import React, { Fragment,Conteiner,useState } from 'react';
import {Col,Row,Image,Badge,Button} from 'react-bootstrap';
import '/Users/micaelapaniagua/Desktop/bajon-app/src/App.css';

const Extracheese = () => {

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
                <Image src={imagen} width="100px" height="100px"  roundedCircle/> 
                <br/>
                <div className="descripcion">ExtraCheese Burger {nombre}</div>
                <p>_______________________</p>
                <p>Medadallon de 120g</p>
                <p>Cheddar x {nombre==="Doble"? "4":"6"}</p>
                <p>Cheddar Fundido</p>
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

export default Extracheese;


 