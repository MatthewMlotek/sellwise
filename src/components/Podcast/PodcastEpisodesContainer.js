import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResultElement from '../o-nas/elements/ResultElement';


const PodcastEpisodesContainer = () => {
    return (
        <Container fluid className='bg-light p-5'>
          

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
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/10/s07-uai-720x376.jpeg" alt="" href="#result1"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/10/S06_okladka-uai-720x376.jpeg" alt="" href="#result2"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/09/s05-okladka-uai-720x376.jpeg" alt="" href="#result3"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/08/s04-thumb-uai-720x376.jpeg" alt="" href="#result4"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/07/s03_tlo-uai-720x376.jpeg" alt="" href="#result5"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/07/S02_okladka-uai-720x376.jpeg" alt="" href="#result6"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/06/NSM-1200×627-px-uai-720x376.png" alt="" href="#result7"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/06/nsm-149-5-uai-720x377.jpeg" alt="" href="#result8"/>
                    <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/06/s01-wdrazamynsm-uai-720x376.jpeg" alt="" href="#result9"/>
                    </Row>
                </Col>
            <Col lg={2} className="d-none d-lg-block"></Col>
            </Row>
        </Container>
    );
}
 
export default PodcastEpisodesContainer;