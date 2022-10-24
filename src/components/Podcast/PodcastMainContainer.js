import React from 'react';
import { Container, Row, Col, FormControl, FormCheck, Button } from 'react-bootstrap';
const PodcastMainContainer = () => {
    return (
            <Container fluid className='text-black p-5'>
                <Row>
                    <Col lg={2} className="d-none d-lg-block"></Col>
                    <Col xs={12} lg={6}>
                    <iframe src="https://widget.spreaker.com/player?show_id=3234961&theme=light&playlist=show&cover_image_url=https%3A%2F%2Fd1bm3dmew779uf.cloudfront.net%2Fcover%2Fa9bbd9c2fdf28d078be8f657eb072f7d.jpg" width="100%" height="820px" frameborder="0" title='podcast'/>
                    </Col>
                    <Col xs={12} lg={2} className="p-5 text-center bg-white">
                        <p className="fs-2">Subskrybuj <strong>Podcast</strong></p>
                        <p className="fs-5">
                        Wpisz swój adres e-mail poniżej, a otrzymasz od nas regularnie informacje o nowych odcinkach i wpisach na temat sprzedaży i marketingu B2B!</p>
                        <FormControl type='text' placeholder='Twoje Imię' name='firstName'/>
                        <FormControl type='text' placeholder='Twój adres e-mail' name='email'/>
                         <small><FormCheck /> Wyrażasz zgodę na otrzymywanie informacji handlowych środkami komunikacji elektronicznej wysyłanymi przez www.sellwise.pl oraz na wykorzystanie komunikacji email w celach marketingowych. (Polityka Prywatności).</small>
                         <Button variant='primary' size='big' className='m-1'>SUBSKRYBUJ PODCAST</Button>
                    </Col>
                    <Col lg={2} className="d-none d-lg-block"></Col>
                </Row>
                <Row>
                <Col lg={2} className="d-none d-lg-block"></Col>

                <Col xs={12} lg={8}>
                    <p className="fs-2 text-white text-center pt-5">
                        Słuchaj podcastu tam gdzie Ci <strong>najwygodniej</strong>
                    </p>
                    <Row className='text-center' style={{color: "#282958"}}>
                        
                        <Col xs={12} lg={4} className='bg-white p-5 border-end border-dark'>
                            <a href="https://itunes.apple.com/pl/podcast/nowoczesna-sprzeda%C5%BC-i-marketing/id1441468060">
                            <img src="https://www.sellwise.pl/wp-content/uploads/2020/04/itunes-granat.svg" alt="" />
                            <p className="h4">Itunes</p>
                            </a>
                        </Col>
                        <Col xs={12} lg={4} className='bg-white p-5 border-end border-dark'>
                            <a href="https://www.youtube.com/channel/UC4yx90G15YWCeyLbXy5C8uw">
                            <img src="https://www.sellwise.pl/wp-content/uploads/2020/04/youtube-granat.svg" alt="" />
                            <p className="h4">YouTube</p>
                            </a>
                        </Col>
                        <Col xs={12} lg={4} className='bg-white p-5'>
                            <a href="https://open.spotify.com/show/6qRcpt8brJ4KR4W5miO2Q6?si=OAvczebzRO2a2VNeGEsCCg">
                            <img src="https://www.sellwise.pl/wp-content/uploads/2020/04/spotify-granat.svg" alt="" />
                            <p className="h4">Spotify</p>
                            </a>
                        </Col>
                    </Row>
                </Col>

                <Col lg={2} className="d-none d-lg-block"></Col>
                </Row>
            </Container>
        
        );
}
 
export default PodcastMainContainer;