import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './style.css'

import OfferElement from '../elements/OfferElement';

const ServicesDoradztwoContainer = () => {
    return (
        <>
        <Container fluid className='DoradztwoB2BContainer px-5'>
            <Row className='text-white'>
                <Col xs={12} style={{lineHeight: "250px"}}>
                    &nbsp;
                </Col>
                <Col xs={12}>
                    <p className=' ps-5' style={{fontSize: "60px"}}>
                       <strong>Doradztwo </strong> <br />
                       w sprzedaży i <br /> marketingu B2B
                    </p>
                </Col>
                <Col xs={12} style={{lineHeight: "100px"}}>
                    &nbsp;
                </Col>
            </Row>
            </Container>
            <Container fluid className='offerElementsContainer'>

            
            <Row className='mx-5 bg-white'>
            <Col xs={12} lg={10} className=' p-4'>
                    <p className="fs-1">
                    Przeczytaj o naszych usługach, <strong>głównych</strong> oraz <strong>pomocniczych,</strong> a następnie zamów Bezpłatną Konsultację.
                    </p>
                </Col>
                <Col lg={2} className="d-none d-lg-block">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/04/scroll.svg" alt="." className='mt-5'/>
                </Col>
            </Row>

            <Row className='p-lg-4' style={{marginTop: "-23px"}}>

                

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

            <Row >
                <Col xs={12} style={{color: "white", fontSize: "50px"}}>
                    <div style={{lineHeight: "100px"}}>&nbsp;</div>
                    <span ><strong>Usługi </strong> pomocnicze</span>
                </Col>
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

                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/05/uslugi-dyrektor-na-godziny.svg"}
                 alt={"dyrektor ikona"}
                  title={"Dyrektor sprzedaży jako usługa"}
                   content={"Pomagamy firmom poprzez przejęcie części zadań przy zarządzaniu działem sprzedaży oraz marketingu. Do tego dodajemy całe nasze know-how i sukcesywnie profesjonalizujemy sprzedaż."}
                   href={"#"}
                   />
                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/Uslugi-Rekrutacja.svg"}
                 alt={"rekrutacja ikona"}
                  title={"Rekrutacja Handlowców"}
                   content={"Jako agencja rekrutacyjna, pomagamy w znalezieniu i rekrutacji najlepszych handlowców. Pomagamy w całym procesie, od określenia kompetencji do wyszkolenia."}
                   href={"#"}
                   />
                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/Uslugi-Zarza%CC%A8dzanie.svg"}
                 alt={"zarządzanie ikona"}
                  title={"Zarządzanie Sprzedażą"}
                   content={"Tworzymy skuteczne procesy zarządzania sprzedażą i zespołem, oparte na miarach, faktach oraz poprawnym systemie premiowym i motywacyjnym."}
                   href={"#"}
                   />
                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/Audty-sprzedaz%CC%87y.svg"}
                 alt={"dokument ikona"}
                  title={"Audyt Sprzedaży"}
                   content={"Jako ekspert z zewnątrz sprawdzamy w jaki sposób działają Twoje procesy w obszarze sprzedaży, pokazując gdzie firma popełnia błędy."}
                   href={"#"}
                   />
                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/Strategia-sprzedaz%CC%87y.svg"}
                 alt={"strategia ikona"}
                  title={"Strategia Sprzedaży"}
                   content={"Wraz z klientem tworzymy skuteczne strategie sprzedaży, które są spójne z celami, wartościami oraz usługami/produktami przedsiębiorstwa."}
                   href={"#"}
                   />
                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/Tajemniczy-klient.svg"}
                 alt={"incognito ikona"}
                  title={"Tajemniczy Klient"}
                   content={"Badanie tajemniczego klienta, pozwala sprawdzić jak traktowany jest klient Twojej firmy i dzięki temu wyciągnąć wnioski oparte na faktach do poprawy procesów sprzedaży."}
                   href={"#"}
                   />
                <OfferElement src={"https://www.sellwise.pl/wp-content/uploads/2020/03/szkolenia_ikona_efektywny_system_crm.svg"}
                 alt={"laptop ikona"}
                  title={"Technologie w Sprzedaży B2B"}
                   content={"Wdrażamy u naszych klientów systemy informatyczne, które zbierają wiedzę na temat klienta i procesów, takie jak Systemy CRM czy Marketing Automation."}
                   href={"#"}
                   />
            </Row>
        </Container>
        </>
    );
}
 
export default ServicesDoradztwoContainer;