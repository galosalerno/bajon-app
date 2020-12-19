import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css//bootstrap.min.css';
const items = [
  {
    src: 'https://i.pinimg.com/originals/66/7b/f3/667bf32840f3043c031c9af55d6b6859.jpg',
    altText: 'Imagen 1',
    caption: 'Promo 1',
    
    key: '1'
  },
  {
    src: 'https://i.pinimg.com/originals/97/40/bb/9740bb997da2162912802e3a16f1b439.jpg',
    altText: 'Imagen 2',
    caption: 'Promo 2',
    
    key: '2'
  },
  {
    src: 'https://cazaofertas.com.ar/wp-content/uploads/2017/05/burger-king-cupones--1200x720.jpg',
    altText: 'Imagen 3',
    caption: 'Promo 3',
    
    key: '3'
  }
];

const Promociones = () => <UncontrolledCarousel items={items} />;

export default Promociones;