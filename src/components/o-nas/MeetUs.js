import React from 'react';
import './style.css'

import {Container, Row, Col} from 'react-bootstrap'

const MeetUs = () => {
    return (
        <Container fluid id="containerWithImage" className='p-5' >
            <Row className='text-white'>
                <Col xs={12} style={{lineHeight: "120px"}}>&nbsp;</Col>
                <Col xs={12} lg={6}>
                    <span style={{fontSize: "60px"}}>
                        <strong>Poznaj nas</strong><br />
                        i naszą misję
                    </span>
                    <hr />
                    <p className="fs-4">
                    Pomagamy organizacjom w stabilnym, przewidywalnym i świadomym wzroście, używając innowacyjnych i sprawdzonych metod.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
 
export default MeetUs;