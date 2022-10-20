import React from 'react';

import Col from 'react-bootstrap/Col'

const ResultElement = (props) => {
    return (
        <Col xs={12} lg={3} className=" m-3">
            <a href={props.href}>
            <img src={props.src} alt={props.alt} className="img-fluid border-gray border" />
            </a>
        </Col>
    );
}
 
export default ResultElement;