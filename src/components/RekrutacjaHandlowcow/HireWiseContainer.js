import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HireWiseContainer = () => {
    return (
        
        <Container fluid className='bg-light p-5'>
            <Row>
        <Col lg={2} className="d-none d-lg-block"></Col>
        <Col xs={12} lg={4} >
            <img src="https://www.sellwise.pl/wp-content/uploads/2022/04/hirewise_logo_r-uai-1032x478.png" alt="" className='img-fluid' />
        </Col>
        <Col xs={12} lg={4}>
            <p>
            Na początku lutego 2022 r. dokonaliśmy podziału SellWise na więcej firm i stworzyliśmy WiseGroup. To grupa firm, która specjalizuje się we wszystkich obszarach sprzedaży, rekrutacji i marketingu B2B.
            </p>
            <p>
            Firmą, która specjalizuje się w rekrutacji jest HireWise. To agencja, która bazując na doświadczeniu wyniesionym z SellWise rekrutuje najlepszych kandydatów w świecie sprzedaży i marketingu B2B.
            </p>
        </Col>
        <Col lg={2} className="d-none d-lg-block"></Col>
        </Row>
        </Container>
        
    );
}
 
export default HireWiseContainer;