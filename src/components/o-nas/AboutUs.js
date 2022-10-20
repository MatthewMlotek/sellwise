import React from 'react';
import './style.css'

import {Container, Row, Col} from 'react-bootstrap'



const AboutUs = () => {
    return (
        <Container className="py-4">
            <Row className='bg-white border-bottom border-black p-3'>
                <Col xs={12} lg={6} className="p-5">
                    <Col xs={12}><span className="number mb-3">01.</span></Col>
                    <span className="fs-1">
                        Czym się <br /> <strong>zajmujemy?</strong>
                    </span>
                    <p className="py-4">
                    Sellwise zajmuje się zwiększaniem sprzedaży B2B przy użyciu technologii, szkoleń i doradztwa. Z jednej strony oznacza to współpracę z kadrą zarządzającą i pracę na poziomie strategicznym. Z drugiej strony, dzięki zrozumieniu strategii oraz wizji lokalnej, budujemy dedykowane programy szkoleniowe dostosowane do potrzeb i celów klienta. Jedno i drugie w bezpośredni sposób wpływa na wynik i przekłada się na długotrwały sukces.
                    </p>
                </Col>
                <Col lg={6} className="d-none d-lg-block border-start border-gray">
                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/ilustracja_o_nas_1.svg" alt="ilustracja_o_nas_1" className='imgElement img-fluid'/>
                </Col>
            </Row>

            <Row className='bg-white border-bottom border-black p-3'>

            <Col lg={6} className="d-none d-lg-block border-end border-gray">
                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/ilustracja_o_nas_2.svg" alt="ilustracja_o_nas_2" className='imgElement img-fluid'/>
                </Col>

                <Col xs={12} lg={6} className="p-5">
                    <Col xs={12}><span className="number mb-3">02.</span></Col>
                    <span className="fs-1">
                        Kto <strong>szkoli i doradza?</strong>
                    </span>
                    <p className="py-4">
                    Oprócz kadry wewnętrznej, Sellwise współpracuje z zaufanymi i doświadczonymi trenerami oraz konsultantami. Zawsze dbamy o to, żeby każda z osób posiadała wieloletnie praktyczne doświadczenie w danym zagadnieniu oraz rozumiała branżę klienta. Po pozytywnej analizie potrzeb przedstawiamy klientowi propozycję osoby, która przeprowadzi usługę.
                    </p>
                </Col>
                
            </Row>

            <Row className='bg-white border-bottom border-black p-3'>
                <Col xs={12} lg={6} className="p-5">
                    <Col xs={12}><span className="number mb-3">03.</span></Col>
                    <span className="fs-1">
                        Jak <strong>działamy?</strong>
                    </span>
                    <p className="py-4">
                    Nie pomagamy wszystkim firmom. Każdą usługę poprzedza analiza potrzeb, która pozwala ustalić, czy nasze kompetencje mogą zrealizować cel, który jest ważny dla klienta. To gwarantuje wysoką jakość świadczonych usług, satysfakcję klienta oraz wymierny efekt finansowy współpracy.
                    </p>
                </Col>
                <Col lg={6} className="d-none d-lg-block border-start border-gray">
                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/ilustracja_o_nas_3.svg" alt="ilustracja_o_nas_3" className='imgElement img-fluid'/>
                </Col>
            </Row>

            <Row className='bg-white border-bottom border-black p-3'>

            <Col lg={6} className="d-none d-lg-block border-end border-gray">
                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/ilustracja_o_nas_4.svg" alt="ilustracja_o_nas_4" className='imgElement img-fluid'/>
                </Col>

                <Col xs={12} lg={6} className="p-5">
                    <Col xs={12}><span className="number mb-3">04.</span></Col>
                    <span className="fs-1">
                        Czy klient ma wpływ na <strong>usługę?</strong>
                    </span>
                    <p className="py-4">
                    To od naszego klienta zależy, jak będzie wyglądać przeprowadzona przez nas usługa. W zależności od sytuacji danego przedsiębiorstwa, przyjmujemy rolę wykonawczą, doradczą lub trenerską. Sposób współpracy zawsze zostaje dokładnie ustalony po analizie, tak aby na koniec wspólnego projektu osiągnąć cel, który sobie wspólnie postawiliśmy.
                    </p>
                </Col>
                
            </Row>


        </Container>
    );
}
 
export default AboutUs;