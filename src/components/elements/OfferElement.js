import React from 'react';
import {Col} from 'react-bootstrap';

 const OfferElement = (props) => {
    return (
        <Col xs={12} lg={4} className='bg-white p-5 border-end border-dark'>
            <img src={props.src} alt={props.alt} />
            <p className="fs-3 my-1">
                {props.title}
            </p>
            <p className="mb-5">
                {props.content}
            </p>
            <hr />
            <a href={props.href} className="offerLink">
                DOWIEDZ SIĘ WIĘCEJ <span className='float-end'> &rarr;</span> 
            </a>
        </Col>
    );
 }
  
 export default OfferElement;