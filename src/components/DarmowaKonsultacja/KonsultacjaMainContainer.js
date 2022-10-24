import React from 'react';
import { Container, Row, Col, FormControl, FormCheck, Button } from 'react-bootstrap';

const KonsultacjaMainContainer = () => {
    return (
        <Container>
            <Row >
                <Col xs={12}>
                    <p style={{lineHeight: "200px"}}>
                        &nbsp;</p>
                </Col>
            <Col lg={1} className="d-none d-lg-block"></Col>
                <Col xs={12} lg={5} className="text-white">
                    <p className="fs-1">
                    Zadaj nam <strong>dowolne pytanie</strong>
                    </p>
                    <p className='fs-5'>
                    *O sprzedaż i marketing B2B oczywiście. Naszą bezpłatną konsultację dedykujemy małym, średnim i większym firmom, w których pracuje co najmniej 5 osób. To tam nasze doświadczenie pomaga najbardziej.
                    </p>
                    <p className='fs-5'>
                    Bezpłatna konsultacja to 15 minut, które możesz wykorzystać na skonsultowanie dowolnego tematu związanego ze sprzedażą i marketingiem B2B! Zawsze umawiamy dogodny dla obu stron termin i dbamy o najwyższy poziom udzielanych odpowiedzi.
                    </p>
                </Col>
                <Col xs={12} lg={5} className="bg-white text-black text-center p-4">
                    <span className="fs-2">
                        Wypełnij <strong>formularz</strong>
                    </span>
                    <FormControl type='text' placeholder='Firmowy adres e-mail'/>
                    <FormControl type='text' placeholder='Numer telefonu'/>
                    <FormControl type='text' placeholder='Temat rozmowy'/>
                     <small> <FormCheck name="agree"/> Wyrażasz zgodę na kontakt telefoniczny w celu obsługi niniejszego zgłoszenia. Wyrażasz zgodę na otrzymywanie informacji handlowych środkami komunikacji elektronicznej wysyłanymi przez www.sellwise.pl oraz na wykorzystanie komunikacji email w celach marketingowych (Polityka Prywatności).</small>
                     <br /><br />
                     <strong><small><a href="#regulamin konsultacji">Regulamin Bezpłatnej Konsultacji</a></small></strong> <br />
                     <Button variant='danger' size='big' className='px-5'>WYŚLIJ ZAPYTANIE</Button>
                </Col>
            <Col lg={1} className="d-none d-lg-block"></Col>

            </Row>
        </Container>
    );
}
 
export default KonsultacjaMainContainer;