import React from 'react';

import {Container, Row, Col} from 'react-bootstrap'

const HelloContainer = (props) => {
    return (
        <Container fluid style={{marginTop: '90px'}} className="px-5 bg-white">
            <Row>
                <Col xs={12} lg={6}>
                    <span className='fs60'>
                        {props.title}
                         <strong>{props.titleStrong}</strong>
                    </span>
                    <hr />
                    <Row>
                        <Col xs={12} lg={4}>
                            <p className='h5'>
                                {props.contentLeft}
                            </p>
                        </Col>
                        <Col xs={12} lg={8}>
                            <p>
                            {props.contentRight}
                            </p>
                        </Col>
                        
                    </Row>
                    <hr />
                </Col>
                <Col className='d-none d-lg-block'>
                    {props.svg}
                </Col>
            </Row>
        </Container>
    );
}
 
export default HelloContainer;