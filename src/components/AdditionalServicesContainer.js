import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'

const AdditionalServicesContainer = () => {
    return (
        <Container fluid className='text-center text-lg-start pt-5 text-white' style={{background: "#2b2b5b"}}>
            <Row className='px-5'>
                <Col xs={12} lg={8}>
                    <span className='fs-1'>
                        Zobacz nasze <strong>usługi</strong> dodatkowe
                    </span>
                </Col>
                <Col xs={12} lg={4} className="text-lg-end">
                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/zobacz-button.png" alt="napis zobacz" width="120px"/>
                </Col>
            </Row>
            <Row className='px-5'>
                <Col xs={12} lg={6} className='p-5'>
                    <span className="h1">
                        Wszystko zaczyna się od <strong>rozmowy</strong>
                    </span>
                    <p className="pt-5">
                    Najlepszym pierwszym krokiem jest rozmowa z jednym z naszych konsultantów.
                    </p>
                    <p>
                    W czasie darmowych 15 minut można sprawdzić kompetencje konsultanta oraz poszukać wstępnych rozwiązań wyzwania, które jest obecnie najważniejsze dla firmy.
                    </p>
                    <Button className='mt-5' variant='danger'>WYŚLIJ ZAPYTANIE &rarr;</Button>
                </Col>
                <Col lg={6} className="d-none d-lg-block">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/sn-glowna.png" alt="men with beard" />
                </Col>
            </Row>
        </Container>
    );
}
 
export default AdditionalServicesContainer;