import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArticlePodcast = () => {
    return (
        <Container fluid className='bg-white'>
            <Row>
            <Col lg={2} className="d-none d-lg-block"></Col>
                <Col className='text-center'>
                    <p className="fs-2">
                    Posłuchaj <strong>podcastu </strong> skupionego na <br />
                    sprzedaży i marketingu <br />
                    w firmach B2B.
                    </p>
                    <Link to="/nsm">
                        <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/Button-szkolenia-raster-uai-258x258.png" alt="" width={160} />
                    </Link> <br />
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/podcast_ilustracja.svg" alt="" className='img-fluid mt-5' />
                </Col>
            <Col lg={2} className="d-none d-lg-block"></Col>
            </Row>
        </Container>
    );
}
 
export default ArticlePodcast;