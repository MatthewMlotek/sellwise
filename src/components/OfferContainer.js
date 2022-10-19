import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import OfferElement from './elements/OfferElement';

const OfferContainer = () => {
    return (
        <>
        <Container fluid className='offerContainer px-5'>
            <Row className='text-white'>
                <Col xs={12} style={{lineHeight: "400px"}}>
                    &nbsp;
                </Col>
                <Col xs={12}>
                    <p className='fs-1 ps-5'>
                        Co możemy <br/>
                         <strong>dla Ciebie</strong> zrobić
                    </p>
                </Col>
                <Col xs={12} style={{lineHeight: "200px"}}>
                    &nbsp;
                </Col>
            </Row>
            </Container>
            <Container fluid className='offerElementsContainer'>

            
            <Row className='p-lg-4'>
                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/szkolenia_ikona_networking_offline.svg"}
                 alt={"szkolenia ikona"}
                  title={"Doradztwo w Pozyskiwaniu Klientów"}
                   content={"Pomagamy firmom sprzedającym w modelu B2B w zdefiniowaniu i wdrożeniu kompletnej strategii pozyskiwania potencjalnych klientów."}
                   href={"#"}
                   />

                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/Uslugi-B2B.svg"}
                 alt={"sprzedaż ikona"}
                  title={"Doradztwo w Sprzedaży B2B"}
                   content={"Pomagamy na wszystkich płaszczyznach sprzedaży B2B – od audytu prowadzonych działań, przez budowę kompetencji i procesów, aż do zarządzania."}
                   href={"#"}
                   />

                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/Uslugi-Marketing.svg"}
                 alt={"marketing ikona"}
                  title={"Doradztwo w Marketingu B2B"}
                   content={"Pomagamy tworzyć skuteczne Strategie Marketingu B2B opierając się na kompetencjach i zasobach wewnętrznych zespołu klienta oraz na najnowszych trendach i wiedzy."}
                   href={"#"}
                   />
            </Row>

            <Row className='p-lg-4'>
                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/Uslugi-Szkolenia.svg"}
                 alt={"szkolenia ikona"}
                  title={"Szkolenia Sprzedażowe"}
                   content={"Szkolimy z najważniejszych kompetencji w obszarze sprzedaży, zarządzania sprzedażą i marketingu. Nasze szkolenia zawsze są dopasowane do celu klienta."}
                   href={"#"}
                   />

                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/Konsultacje-CRM.svg"}
                 alt={"CRM ikona"}
                  title={"Wdrożenie systemu CRM"}
                   content={"Pomagamy w wyborze i wdrożeniu najlepszego CRM dla klienta. Dzięki analizie potrzeb rekomendowany przez nas system pasuje do procesów, jak i budżetu klienta."}/>

                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/Uslugi-Rekrutacja.svg"}
                 alt={"rekrutacja ikona"}
                  title={"Rekrutacja Handlowców"}
                   content={"Jako agencja rekrutacyjna, pomagamy w znalezieniu i rekrutacji najlepszych handlowców. Pomagamy w całym procesie, od określenia kompetencji do wyszkolenia."}
                   href={"#"}
                   />
            </Row>
        </Container>
        </>
    );
}
 
export default OfferContainer;