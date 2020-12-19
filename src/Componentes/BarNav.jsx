import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button,FormControl,Form,Nav} from 'react-bootstrap';
import '/Users/micaelapaniagua/Desktop/bajon-app/src/App.css'
import icono from '/Users/micaelapaniagua/Desktop/bajon-app/src/Assets/icono.png';

const BarNav = () => {


    return(
        <div className="Navbar">
            <h2>TUBAJONYA</h2>
            <h3><b>Nuestras Burgers</b></h3>
            
            <img src={icono} alt=""/>
        </div>
    )
}

export default BarNav;
