import React from 'react';
import {Container, Row, Col,} from 'react-bootstrap';

const DifferencesContainer = () => {
    return (
        <Container fluid className="d-none d-lg-block bg-white text-black">
            <Row className='py-5'>
                <Col lg={3}>&nbsp;</Col>

                <Col  lg={6}>
                    <p className="fs-2">
                    Czym różni się marketing i sprzedaż w <strong>B2C od B2B?</strong>
                    </p>
                    <p>
                    Sprawdź, dlaczego marketing i sprzedaż B2B są zupełnie inne od B2C. Właśnie dlatego zaprojektowaliśmy szkolenia na ten temat!
                    </p>
                </Col>

                <Col lg={3}>&nbsp;</Col>
                <Col lg={12} className="text-center pt-5">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2022/02/Tabelka-e1645111364963.png" alt="" className='img-fluid'/>
                </Col>
            </Row>
        </Container>
    );
}
 
export default DifferencesContainer;