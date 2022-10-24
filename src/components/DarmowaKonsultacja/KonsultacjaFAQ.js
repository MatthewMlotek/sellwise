import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const KonsultacjaFAQ = () => {
    return (
        <Container>
            <Row>
            <Col lg={2} className="d-none d-lg-block"></Col>

                <Col lg={8} className='d-none d-lg-flex'>
                
                        <Accordion defaultActiveKey="" style={{width: "100%"}}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>GDZIE ZNAJDĘ NAGRANIE SZKOLENIA?</Accordion.Header>
                                <Accordion.Body>
                                Wszystkie nagrania szkoleń znajdują się na stronie akademia.sellwise.pl
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>GDZIE ZNAJDĘ CERTYFIKAT?</Accordion.Header>
                                <Accordion.Body>
                                Jeśli nie otrzymałeś certyfikatu, napisz na kszejka@wisegroup.pl
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    CZY DORADZACIE W OBSZARZE B2C?
                                </Accordion.Header>
                                <Accordion.Body>
                                Nie. Specjalizujemy się w obszarze sprzedaży i marketingu B2B i tylko w tym obszarze doradzamy.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    ILE KOSZTUJE DORADZTWO?
                                </Accordion.Header>
                                <Accordion.Body>
                                Koszty naszego doradztwa są tak skalkulowane, aby były rentowne nawet dla małych i średnich przedsiębiorstw. Wśród naszych klientów znajdują się nawet kilkuosobowe firmy, które dzięki tej usłudze już na wczesnym etapie rozwoju firmy, świadomie budują jej przewagę konkurencyjną.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    JAK MOGĘ ZŁOŻYĆ CV?
                                </Accordion.Header>
                                <Accordion.Body>
                                Jeśli chcesz z nami pracować, wejdź na stronę hirewise.pl/praca – znajdziesz tam wszystkie nasze aktualne oferty.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    NIE MOGĘ ZALOGOWAĆ SIĘ DO AKADEMII. CO MOGĘ ZROBIĆ?
                                </Accordion.Header>
                                <Accordion.Body>
                                Jeśli masz problemy z logowaniem, napisz na kszejka@wisegroup.pl
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                </Col>

            <Col lg={2} className="d-none d-lg-block"></Col>

            </Row>
        </Container>
    );
}
 
export default KonsultacjaFAQ;