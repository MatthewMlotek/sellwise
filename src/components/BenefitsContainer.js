import React from 'react';

import {Container, Row, Col} from 'react-bootstrap'
import BenefitElement from './elements/BenefitElement';

const BenefitsContainer = () => {
    return (
        <Container fluid className='p-5 bg-white'>
            <Row className="d-none d-lg-flex flex-row">
                <Col lg={5} >
                    <span className="fs-1">
                        Dlaczego <br /> <strong>SellWise</strong>
                    </span>
                </Col>
                <Col lg={5}>
                    <span className="fs-1">341</span> <br />
                    <span className="fs-5">Zadowolonych <br />
                      <strong>klientów</strong></span>
                </Col>
                <Col lg={2} className="mb-5">
                    <span className="fs-1">
                        8900
                    </span> <br/>
                    <span className="fs-5">
                        Zadowolonych <br />
                         <strong>uczestników</strong>
                    </span>
                </Col>
                <hr />
            </Row>
            <Row>
                <Col xs={12} className="mt-4">
                    <p>
                    Zauważyliśmy, że większość polskich przedsiębiorstw ma chaotyczną sprzedaż i marketing. To sprawia, że pomimo dobrych produktów lub usług, nie rosną tak szybko jak powinny. Jednocześnie ciężko im znaleźć odpowiednich specjalistów, którzy odpowiedzialnie ułożą te obszary, tak, aby były spójne z rynkiem, produktami i realnymi możliwościami firmy.
                    </p>

                    <p>
                    Postanowiliśmy rozwiązać ten problem tworząc SellWise – firmę doradczo-szkoleniową. Zależało nam na stworzeniu firmy, w której konsultanci ramię w ramię z naszym klientem, wprowadzają realne zmiany w ich firmach. Nasze projekty rozpoczynają się od diagnozy stanu obecnego oraz wypracowania planu rozwoju dla firmy. W dalszej części nasi konsultanci pomagają w ułożeniu poszczególnych obszarów, wdrożeniu procesów, analityki, niezbędnych narzędzi IT oraz rekrutacji dodatkowych członków zespołu. <br />
                    <strong>Sprawdź czy możemy pomóc Twojej firmie!</strong>

                    </p>

                </Col>
            </Row>
            <Row className='border-lg-bottom border-gray text-center text-lg-start pt-4'>
               <BenefitElement
               col={5}
               src="https://www.sellwise.pl/wp-content/uploads/2020/03/skuteczny_prospecting_ikona.svg"
               alt="prospecting ikona"
               line="Skuteczny"
               strong="prospecting"
               />

               <BenefitElement
               col={5}
               src="https://www.sellwise.pl/wp-content/uploads/2020/03/wzrost_sprzedaz%CC%87y_ikona.svg"
               alt="sprzedaż ikona"
               line="Wzrost"
               strong="sprzedaży"
               />

               <BenefitElement
               col={2}
               src="https://www.sellwise.pl/wp-content/uploads/2020/03/krotszy_cykl_sprzedazy.svg"
               alt="klepsydra ikona"
               line="Krótszy"
               strong="cykl sprzedaży"
               />
            </Row>

            <Row className='border-lg-bottom border-gray text-center text-lg-start pt-4'>
               <BenefitElement
               col={5}
               src="https://www.sellwise.pl/wp-content/uploads/2020/03/wzorst_marzy_ikona.svg"
               alt="marża ikona"
               line="Wzrost"
               strong="marży"
               />

               <BenefitElement
               col={5}
               src="https://www.sellwise.pl/wp-content/uploads/2020/03/wzrost_wartosci_transakcji_ikona.svg"
               alt="transakcja ikona"
               line="Wzrost"
               strong="wartości transakcji"
               />

               <BenefitElement
               col={2}
               src="https://www.sellwise.pl/wp-content/uploads/2020/03/trafne_prognozy_ikona.svg"
               alt="prognoza ikona"
               line="Trafne"
               strong="prognozy"
               />
            </Row>
        </Container>
    );
}
 
export default BenefitsContainer;