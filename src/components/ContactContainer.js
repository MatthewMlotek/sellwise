import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';

const ContactContainer = () => {
    return (
        <Container fluid className="bg-primary text-black py-5 px-5">
            <Row>
                <Col xs={12} lg={8} className="px-5 py-4 bg-white">
                    <span className="fs-3">
                        Skontaktuj się <br/> <strong>z nami</strong>
                    </span>
                    <p className='pt-5 pb-3'>
                    Nasz zespół oddzwania szybko. Prawie jak handlowiec pod koniec miesiąca, któremu niewiele brakuje do celu. Sprawdź!
                    </p>
                    <Form>
                        <Form.Group className='p-2'>
                        <Form.Control type="email" placeholder='Firmowy adres e-mail'/>
                        </Form.Group>
                        <Form.Group className='p-2'>
                        <Form.Control type="text" placeholder='Numer telefonu'/>
                        </Form.Group>
                        <Form.Group className='p-2'>
                        <Form.Control as="textarea" placeholder='Temat rozmowy'/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Check type='checkbox' id="agree" label=" Wyrażasz zgodę na kontakt telefoniczny w celu obsługi niniejszego zgłoszenia. Wyrażasz zgodę na otrzymywanie informacji handlowych środkami komunikacji elektronicznej wysyłanymi przez www.sellwise.pl oraz na wykorzystanie komunikacji email w celach marketingowych (Polityka Prywatności)" />
                        </Form.Group>

                        <Button type="submit" variant='primary' size="big">WYŚLIJ</Button>

                    </Form>
                </Col>
                <Col lg={4} className="d-none d-lg-block" style={{background: "#95eaff"}}>
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/formularz_ilustracja.svg" alt="form ilustration" />
                </Col>
            </Row>
            <Row className='text-white mt-5'>
                <Col xs={12}>
                    <span className="fs-1">Bezpośredni <strong>kontakt</strong></span>
                </Col>
                <Col xs={12} lg={6} className="border-bottom border-gray pb-4">
                    <a href="mailto:kontakt@aaaaa.pl">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/email_icon.svg" alt="koperta ikona"/>
                </a>
                <span className="fs-3 ms-3">kontakt@sellwise.pl</span>
                </Col>
                <Col xs={12} lg={6} className="border-bottom border-gray pb-4">
                    
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/phone_icon.svg" alt="koperta ikona"/>
                
                <span className="fs-2 ms-3">537 222 221</span>
                </Col>
            </Row>
        </Container>
    );
}
 
export default ContactContainer;