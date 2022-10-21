import React from 'react';
import {Container, Row, Col,} from 'react-bootstrap';

const SzkolenieInfo = () => {
    return (
        <Container fluid className='bg-white py-5 '>
            <Row>
                <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
                <Col xs={12} lg={4} className="p-5 border-end border-black">
                    <p className="fs-2">
                    Dla kogo są nasze<strong> Szkolenia?</strong> 
                    </p>
                    <ul style={{color: "black", listStyleType: "disc"}}>
                        <li>Dla handlowców pracujących na rynku B2B</li>
                        <li>Dla managerów i dyrektorów sprzedaży</li>
                        <li>Dla marketerów</li>
                        <li>Dla właścicieli i zarządów firm</li>
                        <li>Dla osób, które chcą rozwijać się w segmencie B2B</li>
                    </ul>
                </Col>
                <Col xs={12} lg={4} className="p-5 text-center">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/ilustracja_o_nas_2.svg" alt="" className='img-fluid'/>
                </Col>

                <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
            </Row>
            <Row>
                <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
                <Col xs={12} lg={4} className="p-5 text-center border-end border-black d-none d-lg-block">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/04/niepomoze-ikona.svg" alt="" className='img-fluid' width={280}/>
                </Col>
                <Col xs={12} lg={4} className="p-5 ">
                    <p className="fs-2">
                    <strong>Co otrzymasz </strong> po zakupie?
                    </p>
                    <ul style={{color: "black", listStyleType: "disc"}}>
                        <li>Dostęp do platformy z której możesz korzystać 24/7</li>
                        <li>Natychmiastowy dostęp do szkolenia</li>
                        <li>Materiałym oraz checlisty do wdrożenia od razu po szkoleniu</li>
                        <li>Certyfikat ukończenia szkolenia</li>
                        <li>Dostęp do zamkniętej grupy na Facebooku</li>
                    </ul>
                </Col>
                <Col xs={12} lg={4} className="p-5 text-center border-end border-black d-block d-lg-none">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2022/05/1.svg" alt="" className='img-fluid' width={280}/>
                </Col>

                <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
            </Row>
        </Container>
    );
}
 
export default SzkolenieInfo;