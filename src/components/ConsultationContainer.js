import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const ConsultationContainer = () => {
    return (
        <Container fluid className='p-4 text-center bg-white'>
            <Row>
                <Col xs={12} lg={6} className=" text-black">
                    <span className="fs-3">
                        Zamów bezpłatną <br /> <strong>konsultację</strong>
                    </span>
                    <p className="fs-5">
                    Zadaj nam dowolne pytanie, wystarczy że klikniesz w poniższy przycisk i skontaktujesz się z jednym z naszych specjalistów.
                    </p>
                    <Button size="big" variant="danger"> WYŚLIJ ZAPYTANIE &rarr;</Button>
                </Col>
                <Col className="d-none d-lg-block">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/kons_reka.svg" alt="rysunek telefonu w dłoni" />
                </Col>
            </Row>
        </Container>
    );
}
 
export default ConsultationContainer;