import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResultElement from '../o-nas/elements/ResultElement';


const ArticlesContainer = () => {
    return (
        <Container fluid className='bg-light'>
            <Row>
            <Col lg={2} className="d-none d-lg-block"></Col>
            <Col xs={12} lg={8} >
                <ul className="d-flex flex-column flex-lg-row flex-xs-wrap">
                    <li className="pt-5 flex-fill">
                        <a href="#kategoria" className='text-dark'>Budowanie <br /> zespołów</a>
                    </li>
                    <li className="pt-5 flex-fill">
                        <a href="#kategoria" className='text-dark'>Sprzedaż</a>
                    </li>
                    <li className="pt-5 flex-fill">
                        <a href="#kategoria" className='text-dark'>Marketing</a>
                    </li>
                    <li className="pt-5 flex-fill">
                        <a href="#kategoria" className='text-dark'>Rekrutacja</a>
                    </li>
                    <li className="pt-5 flex-fill">
                        <a href="#kategoria" className='text-dark'>Recenzje</a>
                    </li>
                    <li className="pt-5 flex-fill">
                        <a href="#kategoria" className='text-dark'>Systemy CRM</a>
                    </li>
                </ul>
            </Col>
            <Col lg={2} className="d-none d-lg-block"></Col>
            </Row>

            <Row>
            <Col lg={2} className="d-none d-lg-block"></Col>
            <Col lg={8} className="text-end">
                    <input type="search"  name='search' placeholder='Wyszukaj...'  />
            </Col>
            <Col lg={2} className="d-none d-lg-block"></Col>
            </Row>

            <Row>
            <Col lg={2} className="d-none d-lg-block"></Col>
                <Col xs={12} lg={8}>
                    <Row>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/06/Wskaźniki-KPI-marketing-B2B-uai-720x377.png" alt="" href="#result1"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2020/09/Copy-of-Copy-of-Wskaźniki-KPI-marketing-B2B-uai-720x376.png" alt="" href="#result2"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/07/Copy-of-Add-a-subheading-1-uai-720x376.png" alt="" href="#result3"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/07/hubspot_okladka-uai-720x378.png" alt="" href="#result4"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/03/Wskaźniki-KPI-marketing-B2B-1-uai-720x377.png" alt="" href="#result5"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/07/salesforce-okladka-uai-720x378.png" alt="" href="#result6"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/01/Jakie-narzędzi-marketingowe-uai-720x377.png" alt="" href="#result7"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2020/12/Content-marketing-B2B-uai-720x377.png" alt="" href="#result8"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/01/Marketing-Automation-B2B-uai-720x377.png" alt="" href="#result9"/>
                    </Row>
                </Col>
            <Col lg={2} className="d-none d-lg-block"></Col>
            </Row>
        </Container>
    );
}
 
export default ArticlesContainer;