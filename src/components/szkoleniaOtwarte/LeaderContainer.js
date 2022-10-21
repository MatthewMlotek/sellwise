import React from 'react';
import {Container, Row, Col,} from 'react-bootstrap';

const LeaderContainer = () => {
    return (
        <Container fluid className="bg-white">
            <Row className="p-4">
                <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
                <Col xs={12} lg={4}>
                    <p className="fs-1">
                        <strong>Kto prowadzi </strong> szkolenia?
                    </p>
                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/Zdje%CC%A8cie-o-mnie.png" alt="" className='img-fluid p-5'/>
                </Col>
                <Col xs={12} lg={4} className="py-5 pe-5">
                    <p className="fs-2 pt-5 mt-5">
                        Szymon Negacz
                    </p>
                    <p className="fs-5">
                    Trener Biznesu, Konsultant, Informatyk i właściciel Wisegroup.pl w skład której wchodzą: Sellwise, HireWise, Adwise oraz Akademia Sales. Od samego początku kariery związany ze sprzedażą B2B. Wykorzystując wykształcenie informatyczne i doświadczenie we współpracy ze spółkami technologicznymi, w ostatnich latach rozwija działy sprzedaży w oparciu o nowoczesne technologie. Skutecznie wspiera klientów Sellwise w realizacji swoich celów biznesowych.
                    </p>
                </Col>
                <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
            </Row>
        </Container>
    );
}
 
export default LeaderContainer;