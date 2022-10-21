import React from 'react';
import {Container, Row, Col,} from 'react-bootstrap';

const InfoContainer = () => {
    return (
        <Container fluid className='bg-white py-5'>
            <Row>
                <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
                <Col xs={12} lg={4} className="p-5 border-end border-black">
                    <p className="fs-2">
                    <strong>Strategie </strong> przetestowane w B2B
                    </p>
                    <p className="fs-5">
                    Dzięki dobrze przygotowanej strategii sprzedaży i marketingu Twoje działania dotrą do trudno dostępnych buyer person — członków zarządu i osób podejmujących decyzje w firmie. To osoby, do których nie da się dotrzeć standardowymi strategiami, co jako agencja sprzedaży B2B wiemy lepiej niż ktokolwiek inny.
                    </p>
                </Col>
                <Col xs={12} lg={4} className="p-5 text-center">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2022/05/3.svg" alt="" className='img-fluid'/>
                </Col>

                <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
            </Row>
            <Row>
                <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
                <Col xs={12} lg={4} className="p-5 text-center border-end border-black d-none d-lg-block">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2022/05/1.svg" alt="" className='img-fluid' width={280}/>
                </Col>
                <Col xs={12} lg={4} className="p-5 ">
                    <p className="fs-2">
                    <strong>Praktyczne </strong> materiały
                    </p>
                    <p className="fs-5">
                    Szkolenia składają się z praktycznych lekcji video, które są uzupełnione dodatkowymi materiałami: szablonami e-mail i rozmów, które możesz wykorzystać w swojej pracy 1:1, a także checklistami, notatkami i podsumowaniami. Dzięki temu zdobywanie wiedzy poprzez nasze szkolenia jest maksymalnie skuteczne.
                    </p>
                </Col>
                <Col xs={12} lg={4} className="p-5 text-center border-end border-black d-block d-lg-none">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2022/05/1.svg" alt="" className='img-fluid' width={280}/>
                </Col>

                <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
            </Row>
        </Container>
    );
}
 
export default InfoContainer;