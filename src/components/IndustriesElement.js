import React from 'react';
import {Col} from 'react-bootstrap';

const IndustriesElement = (props) => {
    return (
        <Col xs={12} lg={4} className="bg-white p-5 border-end border-start border-dark">
            <img src={props.src} alt={props.alt} />
            <p className="fs-3 my-4">{props.title}</p>
            <p className="mb-5">{props.content}</p>
            <hr />
            <a href={props.href} className='fs-5 offerLink'>
                <span>DOWIEDZ SIĘ WIĘCEJ</span>
                <span className="float-end">&rarr;</span>
            </a>
        </Col>
    );
}
 
export default IndustriesElement;