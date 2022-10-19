import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterContainer = () => {
    return (
        <Container  className='text-white p-4 px-5' style={
            {background: "#2b2b5b"}}>
            <Row>
                <Col xs={12} lg={3} className="d-flex flex-column">
                    <img fluid src="https://www.sellwise.pl/wp-content/uploads/2021/10/sellwise_logo_biale_retina-footer.png" alt="sellwise logo" /> 

                    <div className='p-4'>
                    <a href="facebook">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/Facebook.svg" alt="logo facebook"/>
                    </a>
                    <a href="likedin">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/Linkedin.svg" alt="logo Linkedin"/>
                    </a>
                    </div>

                    <ul>
                        <li><a href="##">Polityka Prywatności</a></li>
                        <li><a href="##">Polityka Cookies</a></li>
                        <li><a href="##">Obowiązek Informacyjny</a></li>
                        <li><a href="##">Regulamin Świadczenia Usług</a></li>
                    </ul>
                </Col>
                <Col xs={12} lg={3} className="d-flex flex-column">
                    <span className="fs-5">MATERIAŁY</span>

                    <ul>
                        <li>&nbsp;</li>
                        <li><a href="##">Podcast Nowoczesna Sprzedaż i Marketing</a></li>
                        <li><a href="##">Blog o Sprzedaży i Zarządzaniu</a></li>
                        <li><a href="##">Ranking Systemów CRM w Chmurze</a></li>
                        <li><a href="##">O Nas</a></li>
                        <li><a href="##">Nasz Zespół</a></li>
                    </ul>
                </Col>
                <Col xs={12} lg={3} className="d-flex flex-column">
                    <span className="fs-5">USŁUGI</span>

                    <ul>
                        <li>&nbsp;</li>
                        <li><a href="##">Doradztwo w Sprzedaży B2B</a></li>
                        <li><a href="##">Doradztwo w Marketingu B2B</a></li>
                        <li><a href="##">Doradztwo w Pozyskiwaniu Klientów</a></li>
                        <li><a href="##">Szkolenia ze Sprzedaży</a></li>
                        <li><a href="##">Rekrutacja Handlowców</a></li>
                        <li><a href="##">Wdrożenia Systemów CRM</a></li>
                        <li><a href="##">Wszystkie Usługi</a></li>
                    </ul>
                </Col>
                <Col xs={12} lg={3} className="d-flex flex-column">
                    <span className="fs-5">REFERENCJE</span>

                    <ul>
                        <li>&nbsp;</li>
                        <li><a href="##">Future Processing</a></li>
                        <li><a href="##">Value Finance</a></li>
                        <li><a href="##">Air-Com</a></li>
                        <li><a href="##">Nowodvorski</a></li>
                        <li><a href="##">Sylius</a></li>
                        <li><a href="##">BitBag</a></li>
                        <li><a href="##">Klimas Wkręt-Met</a></li>
                        <li><a href="##">Reklamowe24</a></li>
                        <li><a href="##">Promika-Solar</a></li>
                        <li><a href="##">W.P.C</a></li>
                        <li><a href="##">Kwadra System</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <span>&copy; 2022 Made with passion by Sellwise.pl</span>
                </Col>
                <Col xs={12} lg={6}>
                    <span>This site is protected by reCAPTCHA and the Google. Privacy Policy and Terms of Service apply.</span>
                </Col>
                
            </Row>
        </Container>
    );
}
 
export default FooterContainer;