import React from 'react';
import Col from 'react-bootstrap/Col'


const BenefitElement = (props) => {
    return (
        <Col xs={12} lg={props.col}>
        <img src={props.src} alt={props.alt} className="mb-3" />
        <p className="fs-5">{props.line} <br /> 
        <strong>{props.strong}</strong></p>
    </Col>
    );
}
 
export default BenefitElement;
