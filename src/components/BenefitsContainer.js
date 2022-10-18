import React from 'react';

import {Container, Row, Col} from 'react-bootstrap'

const BenefitsContainer = () => {
    return (
        <Container fluid className='p-5'>
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
        </Container>
    );
}
 
export default BenefitsContainer;