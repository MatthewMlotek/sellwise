import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const YoutubeContainer = () => {
    return (
        <Container fluid style={{background: "#282958", color: "#fff"}}>
            <Row>
                <Col lg={2} className="d-none d-lg-block"></Col>
                
                <Col xs={12} lg={8} className="p-4 ">
                    <p className="fs-1">
                        <strong>Sprawdź serię </strong> ekspercką Szymona Negacza
                    </p>
                    <p className="">
                    Zobacz odcinki serii eksperckiej z Szymonem Negaczem opublikowanej na kanale Przygody Przedsiębiorców. Dzięki temu poznasz nasze praktyczne podejście do zarządzania, sprzedaży i marketingu B2B!
                    </p>
                    <Row className='text-center'>
                    <Col xs={12} lg={6}>
                    <iframe width="555" height="313" src="https://www.youtube.com/embed/TWFfpK6_Cfo?list=PLENkEaHKvxkUPESQSZcCK_hSwKFH0pfJZ" title="Jak ZROZUMIEĆ zespół HANDLOWCÓW i ZWIĘKSZYĆ SPRZEDAŻ ? | Szymon Negacz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='container-fluid'></iframe>
                    </Col>
                    <Col xs={12} lg={6}>
                    <iframe width="555" height="313" src="https://www.youtube.com/embed/_tEiqvOKazI?list=PLENkEaHKvxkUPESQSZcCK_hSwKFH0pfJZ" title="10 NAJWAŻNIEJSZYCH obszarów budowania STRATEGII SPRZEDAŻY | Szymon Negacz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='container-fluid'></iframe>
                    </Col>
                    </Row>
                    
                </Col>

                <Col lg={2} className="d-none d-lg-block"></Col>
                <Col xs={12} className="text-center p-5">
                <Button variant='danger' size='big'className='p-3' >ZOBACZ POZOSTAŁE ODCINKI</Button>
                </Col>
            </Row>
        </Container>
    );
}
 
export default YoutubeContainer;