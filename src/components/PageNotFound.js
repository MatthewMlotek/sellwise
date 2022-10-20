import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PageNotFound = () => {
    return (
        <Container className='text-white text-center'>
            <Row style={{minHeight: "100vh"}}>
                <Col xs={12} style={
                    {lineHeight: "100px"}}>
                    &nbsp;
                </Col>
                <Col xs={12}>
                    <p className="h1">
                        Ups, coś poszło nie tak... <br /> <br/>
                        Nie znaleziono takiej strony
                    </p>
                </Col>
            </Row>
            
        </Container>
    );
}
 
export default PageNotFound;