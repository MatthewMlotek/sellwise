import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import IndustriesElement from './IndustriesElement';


const IndustriesContainer = () => {
    return (
        <Container fluid className='py-5 px-4 bg-light'>
            <Row>
                <Col xs={12}>
                    <span className="fs-1">
                        Z jakimi <strong>branżami</strong> pracujemy?
                    </span>
                </Col>
            </Row>
            <Row className="p-lg-4">
                <IndustriesElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/03/szkolenia_ikona_negocjacje_z_dzialem_zakupow.svg"}
                alt={"firmy usługowe ikona"}
                title={"Firmy usługowe w B2B"}
                content={"Sami jesteśmy firmą usługową, dlatego dobrze rozumiemy potrzeby tego segmentu. Pomagamy firmom usługowym w uporządkowaniu wszystkich procesów na styku sprzedaży i marketingu."}
                href={"#"}
                />

                <IndustriesElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2022/06/sellwise.ikony160x280-05.svg"}
                alt={"produkcja i przemysł ikona"}
                title={"Produkcja i Przemysł"}
                content={"Dzięki licznym projektom z firmami produkcyjnymi doskonale rozumiemy potrzeby tego segmentu. Pomagamy w opracowaniu i realizacji skutecznych procesów sprzedażowych i marketingowych."}
                href={"#"}
                />

                <IndustriesElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2022/06/sellwise.ikony160x280-03-1.svg"}
                alt={"software house  ikona"}
                title={"Software House'y"}
                content={"Specjalizujemy się w budowie i wdrażaniu strategii rozwoju i wzrostu Software House’ów. Posiadamy praktyczne doświadczenie wspierania ponad 30 podobnych firm w zakresie sprzedaży i marketingu."}
                href={"#"}
                />

            </Row>

            <Row className="p-lg-4">
                <IndustriesElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2022/06/sellwise.ikony160x280_Obszar-roboczy-1.svg"}
                alt={"skarbonka ikona"}
                title={"E-commerce i Handlowe"}
                content={"Segment firm handlowych i e-commerce pojawił się u nas, ponieważ sprawne procesy i czas reakcji jest tu kluczowy. Pomagamy w skutecznym uporządkowaniu sprzedaży oraz marketingu."}
                href={"#"}
                />

                <IndustriesElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2022/06/sellwise.ikony160x280-06-1.svg"}
                alt={"rakieta ikona"}
                title={"Startupy"}
                content={"Pracując ze startupami zauważyliśmy, że na początkowym etapie błędne ułożenie procesów może być bardzo kosztowne. Układamy procesy sprzedażowe i marketingowe mając na uwadze specyfikę tego segmentu."}
                href={"#"}
                />

                <IndustriesElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2021/06/sellwise.ikony160x280-02.svg"}
                alt={"ikona banku"}
                title={"Fundusze Venture Capital"}
                content={"Pracując z firmami technologicznymi, nabyliśmy doświadczenia we współpracy z funduszami Venture Capital. Pomagamy w diagnozie oraz rozwoju spółek portfelowych."}
                href={"#"}
                />

            </Row>

        </Container>
    );
}
 
export default IndustriesContainer;