import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';




const RekrutacjaHelloContainer = () => {
    return (
        <>
        <Container fluid className='RekrutacjaHelloContainer p-5'>
            <Row className='text-white'>
                <Col xs={12} style={{lineHeight: "250px"}}>
                    &nbsp;
                </Col>
                <Col lg={2} className="d-none d-lg-block"></Col>
                <Col xs={12} lg={8}>
                    <p className=' ps-lg-5' style={{fontSize: "45px"}}>
                       <strong>Rekrutacja </strong> <br />
                       <strong>handlowców</strong> <br />
                       i szefów <br />
                        sprzedaży
                    </p>
                    <hr />
                    <p className=' ps-5'>
                    Oprócz doradztwa i szkoleń, wyspecjalizowaliśmy się w wyszukiwaniu i rekrutowaniu najlepszych ludzi sprzedaży i marketingu.
                    </p>
                </Col>
                <Col lg={2} className="d-none d-lg-block"></Col>

                <Col xs={12} style={{lineHeight: "100px"}}>
                    &nbsp;
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row className='d-none d-lg-flex'>
            <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>

            <Col xs={12} lg={8} className="p-5 bg-light">
                <span className="fs-1" style={{color: "#95EAF8"}}>01.</span> 
                <p className="fs-2">
                Czy <strong>wiesz,</strong> że... ?
                </p>
                <p className="fs-5 border-start border-2 border-dark ps-4">
                Według naszego doświadczenia, prawie wszystkich handlowców rekrutują działy HR bez zrozumienia specyfiki procesów sprzedaży i modelu biznesowego.
                </p>
            </Col>

            <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>

            </Row>
            <Row className='d-none d-lg-flex'>
            <Col lg={2} className="d-none d-lg-block"></Col>

            <Col xs={12} lg={8} className="p-5 bg-light border-top border-dark">
                <span className="fs-1" style={{color: "#95EAF8"}}>02.</span> 
                <p className="fs-2">
                Rekrutujemy ludzi sprzedaży dopasowanych <br />
                do <strong>Twojej firmy</strong> i specyfiki <strong>Twoich klientów</strong>
                </p>
                <p>
                Rekrutacja to usługa, która znajduje się w naszym portfolio nie od początku. Kiedy rozwijaliśmy biznesy naszych klientów, natknęliśmy się na problem. Nowi ludzie sprzedaży, którzy trafiali do zespołów objętych projektem doradczym, zazwyczaj mieli przynajmniej kilka problemów, które niemalże uniemożliwiały współpracę.
                </p>
                <p>Najczęściej nowa osoba:</p>

                <ul style={{color: "black", listStyleType: "disc"}}>
                    <li>dotąd nie sprzedawała do podobnego segmentu klientów,</li>
                    <li>nie miała styczności z zarządami firm,</li>
                    <li>pracowała na krótkich procesach zakupowych (podczas gdy nasz klient pracował na długich),</li>
                    <li>nie miała doświadczenia ze sprzedażą doradczą,</li>
                    <li>nie pozyskiwała samodzielnie klientów,</li>
                    <li>pracowała tylko na jednym typie leadów (Np. tylko przychodzące),</li>
                    <li>oczekiwała, że klienci „sami się pojawią”,</li>
                    <li>krótko po przyjściu okazywała się nie mieć kluczowej kompetencji (mimo, że była zapisana w CV),</li>
                    <li>nie pasowała do kultury organizacyjnej naszego klienta.</li>
                </ul>
                <p>
                Właśnie z tego powodu, postanowiliśmy zaprojektować usługę, która ściągnie z naszych klientów konieczność czasochłonnego zajmowania się rekrutacją oraz jednocześnie, dostarczy kandydatów, którzy rzeczywiście pasują do firmy.
                </p>
                <p>
                Rekrutacja to bardzo drogi proces, wymagający poświęcenia czasu na wiele spotkań, analizę dokumentów, telefony i weryfikowanie umiejętności kandydata. Nasze doświadczenie umożliwia poprowadzenie procesu w taki sposób, żeby klient odbył zaledwie 2-3 spotkania na jedno stanowisko z osobami, które spełniają wszystkie wymagania kompetencyjne.
                </p>
                <p><strong>Dlaczego warto?</strong></p>

                <ul style={{color: "black", listStyleType: "disc"}}>
                    <li>Kandydaci są rekrutowani przez doświadczonych konsultantów biznesowych – <u> nie rekruterów!</u></li>
                    <li>Posiadamy obszerną bazę kontaktów do kandydatów z wiedzą i doświadczeniem,</li>
                    <li>Redukujemy do minimum inwestycję czasu po stronie klienta,</li>
                    <li>Nasze doświadczenie sprzedażowe umożliwia dobranie kandydatów, którzy pomagają firmom rosnąć.</li>
                </ul>
            </Col>

            <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
            <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>


            <Col lg={8} xs={12} className="d-none d-lg-flex">
            <Link to="/praca">
                    <Button variant='danger' size='big' >
                        ZOBACZ NASZE OFERTY PRACY
                    </Button>
                </Link>
            </Col>
                
            <Col lg={2} className="d-none d-lg-block"></Col>


            </Row>
            </Container>
            
        </>
    );
}
 
export default RekrutacjaHelloContainer;