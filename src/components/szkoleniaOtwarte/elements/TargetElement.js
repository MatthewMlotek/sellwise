import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
const TargetElement = (props) => {
    return (
        <>
        <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
        <Col xs={12} lg={8} className="bg-white border-bottom border-black">
            <Row >
            <Col lg={3} className="d-none d-lg-block">
                <img src={props.src} alt=""  className='img-fluid'/>
            </Col>
            <Col xs={12} lg={7} className='p-5'>
                <p className="fs-4">{props.title}</p>
                <p className="fs-5">{props.content}</p>
            </Col>
            <Col xs={12} lg={2} className="py-lg-5 text-center">
                <span className='fs-3'><strong>{props.price}</strong></span> <br /> <br />
                <span>{props.description}</span> <br /> <br />
                <a href={props.href}><Button variant='danger' size='big'>DOWIEDZ SIĘ WIĘCEJ</Button></a>
            </Col>

            </Row>
        </Col>
        <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>

        </>
    );
}
 
export default TargetElement;