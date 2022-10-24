import React from 'react';


import {Container, Row, Col} from 'react-bootstrap'



const QuestionsContainer = () => {
    return (
        <Container className="py-4">
            <Row className='bg-white border-bottom border-black p-3'>
                <Col xs={12} lg={6} className="p-5">
                    <Col xs={12}><span className="number mb-3">01.</span></Col>
                    <span className="fs-1">
                        Jakie zadać <strong>pytania?</strong>
                    </span>
                    <p className="py-4">
                    Warto zapytać na przykład o:
                    </p>
                    <ul style={{color: "#000", listStyleType: "disc"}}>
                        <li>Jak w moim przypadku najlepiej pozyskiwać klientów?</li>
                        <li>Czy opłaca mi się inwestować w marketing B2B?</li>
                        <li>Jak uporządkować mój dział sprzedaży?</li>
                        <li>Jak zmotywować moich handlowców?</li>
                        <li>Jak podejść do wdrożenia systemu CRM?</li>
                        <li>Czy moja strategia sprzedaży jest odpowiednia?</li>
                    </ul>
                </Col>
                <Col lg={6} className="d-none d-lg-block border-start border-gray">
                <img src="https://www.sellwise.pl/wp-content/uploads/2020/04/ilustracja_zpytanie-kons.svg" alt="ilustracja_o_nas_1" className='imgElement img-fluid'/>
                </Col>
            </Row>

            <Row className='bg-white border-bottom border-black p-3'>

            <Col lg={6} className="d-none d-lg-block border-end border-gray">
                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/ilustracja_o_nas_2.svg" alt="ilustracja_o_nas_2" className='imgElement img-fluid'/>
                </Col>

                <Col xs={12} lg={6} className="p-5">
                    <Col xs={12}><span className="number mb-3">02.</span></Col>
                    <span className="fs-1">
                        Z kim najczęściej <strong>pracujemy?</strong>
                    </span>
                    <p className="py-4">
                    Jako firma specjalizujemy się w segmencie B2B (sprzedaż firma-firma). Nasze wsparcie najlepiej sprawdza się kiedy w Twojej firmie jest już zespół lub jesteś gotowy do rekrutacji. Najsilniej specjalizujemy się w sektorze produkcyjnym, przemysłowym, IT (SaaS oraz Software House’y) oraz w usługowym. Opiekujemy obszar zarządzania, sprzedaży, marketingu, strategii oraz technologii. 
                    </p>
                </Col>
                
            </Row>

            <Row className='bg-white border-bottom border-black p-3'>
                <Col xs={12} lg={6} className="p-5">
                    <Col xs={12}><span className="number mb-3">03.</span></Col>
                    <span className="fs-1">
                        Kto będzie <strong>odpowiadać?</strong>
                    </span>
                    <p className="py-4">
                    Zaraz po zamówieniu bezpłatnej konsultacji skontaktuje się z Tobą nasze biuro, dopyta o temat i umówi dogodny termin rozmowy z ekspertem. Każdą rozmowę prowadzi nasz wewnętrzny konsultant w oparciu o swoje pełne doświadczenie i wiedzę. Nawet jeżeli nie będzie znać odpowiedzi (co zdarza się rzadko jak dwukrotnie przekroczony target sprzedaży), skonsultuje temat z pełnym zespołem i wróci z odpowiedzią.
                    </p>
                </Col>
                <Col lg={6} className="d-none d-lg-block border-start border-gray">
                <img src="https://www.sellwise.pl/wp-content/uploads/2020/12/szkolenia_ikona_empatyczne_negocjacje-red2-1.svg" alt="ilustracja_o_nas_3" className='imgElement img-fluid'/>
                </Col>
            </Row>

            


        </Container>
    );
}
 
export default QuestionsContainer;