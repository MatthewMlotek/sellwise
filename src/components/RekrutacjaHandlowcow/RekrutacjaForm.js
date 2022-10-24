import React from 'react';
import {Container, Row, Col, Button, FormControl, FormCheck, FormLabel} from 'react-bootstrap';

import './style.css'

const RekrutacjaForm = () => {
    return (
        <Container fluid className='p-4  bg-white'>
            <Row >
                <Col lg={2} className="d-none d-lg-block"></Col>
                <Col xs={12} lg={4} className=" text-black border border-light">
                    <p className="fs-2">
                        Szukasz <strong>handlowca, marketera, lub szefa działu?</strong>
                    </p>
                    <p>
                    Zostaw numer, oddzwonimy i sprawdzimy czy ta usługa sprawdzi się w Twoim przypadku.
                    </p>
                    <form>
                    <FormControl type='text' placeholder='Firmowy adres e-mail' name='email'/>
                    <FormControl type='text' placeholder='Numer telefonu' name="phone"/>
                    <FormControl type='text' placeholder='Temat rozmowy' name="topic"/>
                    <FormLabel>
                    <FormCheck name="agree"/>
                    Wyrażasz zgodę na kontakt telefoniczny w celu obsługi niniejszego zgłoszenia. Wyrażasz zgodę na otrzymywanie informacji handlowych środkami komunikacji elektronicznej wysyłanymi przez www.sellwise.pl oraz na wykorzystanie komunikacji email w celach marketingowych (Polityka Prywatności).
                    </FormLabel>

                    <a href="#regulaminKonsultacji"><small><strong>Regulamin Bezpłatnej Konsultacji</strong></small></a> <br />

                    <Button type="submit" variant='danger' size='big' className='my-4'>WYŚLIJ ZAPYTANIE</Button>

                    </form>
                </Col>
                <Col lg={4} className="d-none d-lg-block text-center bg-light">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/kons_reka.svg" alt="rysunek telefonu w dłoni" />
                </Col>
                <Col lg={2} className="d-none d-lg-block"></Col>
            </Row>

            <Row>
            <Col lg={2} className="d-none d-lg-block"></Col>

                <Col xs={12} lg={8}>
                    <p className="fs-2">
                    Jak <strong>rekrutujemy?</strong>
                    </p>
                    <ul style={{color: "black", listStyleType: "disc"}}>
                        <li>Analizujemy model biznesowy oraz specyfikę procesu sprzedaży,</li>
                        <li>Definiujemy razem z klientem profil idealnego kandydata,</li>
                        <li>Wybieramy kanały pozyskania potencjalnych kandydatów,</li>
                        <li>Piszemy ogłoszenia i uruchamiamy rekrutację,</li>
                        <li>Po wstępnej selekcji, nasze oprogramowanie prowadzi wirtualne rozmowy rekrutacyjne z dużym gronem kandydatów,</li>
                        <li>Analizujemy nagrania i zapraszamy najlepszych kandydatów na rozmowy z konsultantem,</li>
                        <li>Organizujemy Assesment Center, na którym weryfikujemy kompetencje kandydata,</li>
                        <li>Wybieramy 2-3 najlepszych kandydatów i przesyłamy do analizy klientowi.</li>
                    </ul>
                </Col>

            <Col lg={2} className="d-none d-lg-block"></Col>
            <Col lg={2} className="d-none d-lg-block"></Col>

                <Col xs={12} lg={8}>
                    <p className="fs-2">
                    <strong>Dla </strong> kogo?
                    </p>
                    <p>Dla każdej firmy, która chce poprowadzić <strong>rekrutację handlowców.</strong> Zapraszamy do współpracy:</p>
                    <ul style={{color: "black", listStyleType: "disc"}}>
                        <li>Właścicieli lub managerów w małych i średnich przedsiębiorstwach.</li>
                        <li>Firmy sprzedające zarówno w modelu B2B, jak i B2C.</li>
                        <li>Firmy posiadające dział obsługi klienta.</li>
                    </ul>
                </Col>

            <Col lg={2} className="d-none d-lg-block"></Col>
            </Row>
        </Container>
    );
}
 
export default RekrutacjaForm;