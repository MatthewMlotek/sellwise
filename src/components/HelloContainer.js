import React from 'react';
import HelloSvgComponent from './HelloSvgComponent'
import {Container, Row, Col} from 'react-bootstrap'

const HelloContainer = () => {
    return (
        <Container fluid style={{marginTop: '90px'}} className="px-5 bg-white">
            <Row>
                <Col xs={12} lg={6}>
                    <span className='fs60'>
                        Rozwój <br/>
                        sprzedaży <br/>
                        to <strong>proces</strong>
                    </span>
                    <hr />
                    <Row>
                        <Col xs={12} lg={4}>
                            <p className='h5'>
                                DORADZTWO <br/>
                                SZKOLENIA <br/>
                                I <br/>
                                REKRUTACJA
                            </p>
                        </Col>
                        <Col xs={12} lg={8}>
                            <p>
                            Wierzymy, że prawdziwy rozwój sprzedaży to proces, dlatego pracujemy od A do Z. Przeprowadzamy audyt, wspólnie z klientem przygotowujemy strategię, procesy i wdrażamy narzędzia IT, a na koniec – profesjonalnie szkolimy i uzupełniamy zespół.
                            </p>
                        </Col>
                        
                    </Row>
                    <hr />
                </Col>
                <Col className='d-none d-lg-block'>
                    <HelloSvgComponent/>
                </Col>
            </Row>
        </Container>
    );
}
 
export default HelloContainer;