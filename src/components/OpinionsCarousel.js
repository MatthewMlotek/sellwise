import React from 'react';
import {Carousel, Container, Row, Col} from 'react-bootstrap';

const OpinionsCarousel = () => {
  return (

    <Container fluid className='p-5 bg-light'>

        <Row>
            <Col className='ms-5'>
                <span className="fs-1">Co mówią o nas nasi <strong>klienci?</strong></span>
            </Col>
        </Row>

    <Carousel>
      <Carousel.Item>
        <Container fluid>
            <Row className="g-3">
                <Col xs={12} lg={3} className="bg-white p-5 m-3">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2021/10/cudzyslow.png" alt="cudzysłów" />
                    <p>
                    Szkolenie bardzo rzeczowe, mocno osadzone w realiach, świetne analizy procesu zakupu i wartości dodanych. Bardzo dobry, bezpośredni kontakt z uczestnikami szkolenia.
                    </p>
                    <br /><br />
                    <h6>
                        Jan Kowalski <br />
                        <small>Dyrektor w ...</small>
                    </h6>
                </Col>
                <Col xs={12} lg={4} className="bg-white p-5 m-3">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2021/10/cudzyslow.png" alt="cudzysłów" />
                    <p>
                    W trakcie darmowej konsultacji SellWise ustrzegło mnie przed popełnieniem bardzo kosztownego błędu. Następnie wziąłem udział szkoleniu z prospectigu i dostałem konkretne rozwiązania i narzędzia.
                    </p>
                    <br /><br />
                    <h6>
                        Jan Nowak <br />
                        <small>Prezes w ...</small>
                    </h6>
                </Col>
                <Col xs={12} lg={3} className="bg-white p-5 m-3">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2021/10/cudzyslow.png" alt="cudzysłów" />
                    <p>
                    Brałem udział w szkoleniach i konsultacjach, które uważam za bezwartościowe. W przypadku SellWise uważam, że każda zainwestowana złotówka zwróciła się już wielokrotnie. Polecam!
                    </p>
                    <br /><br />
                    <h6>
                        Dawid Kowalski <br />
                        <small>CEO w ...</small>
                    </h6>
                </Col>
            </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container fluid>
            <Row className="g-3">
                <Col xs={12} lg={3} className="bg-white p-5 m-3">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2021/10/cudzyslow.png" alt="cudzysłów" />
                    <p>
                    Sellwise pomógł nam w każdym aspekcie funkcjonowania firmy: od wdrożenia procesu sprzedaży i systemu CRM, przez marketing i rekrutację nowych handlowców, aż do uporządkowania pracy biura . Gorąco polecam!
                    </p>
                    <br /><br />
                    <h6>
                        Jan Kowalski <br />
                        <small>Dyrektor w ...</small>
                    </h6>
                </Col>
                <Col xs={12} lg={4} className="bg-white p-5 m-3">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2021/10/cudzyslow.png" alt="cudzysłów" />
                    <p>
                    Spotkanie odbyło się w trybie warsztatowym podczas którego zapoznaliśmy się również z know-how i narzędziami do cold outreachu. Stosujemy je teraz w naszej codziennej pracy przy budowaniu lejka sprzedażowego.
                    </p>
                    <br /><br />
                    <h6>
                        Jan Nowak <br />
                        <small>Prezes w ...</small>
                    </h6>
                </Col>
                <Col xs={12} lg={3} className="bg-white p-5 m-3">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2021/10/cudzyslow.png" alt="cudzysłów" />
                    <p>
                    Jeśli wahasz się nawiązać współpracę z SellWise, posłuchaj podcastu NSM i sam odpowiedz sobie na pytanie „Czy warto?”. Ja powiem tylko, że warto i to bardzo 🙂</p>
                    <br /><br />
                    <h6>
                        Dawid Kowalski <br />
                        <small>CEO w ...</small>
                    </h6>
                </Col>
            </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container fluid>
            <Row className="g-3">
                <Col xs={12} lg={3} className="bg-white p-5 m-3">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2021/10/cudzyslow.png" alt="cudzysłów" />
                    <p>
                    W trakcie darmowej konsultacji SellWise ustrzegło mnie przed popełnieniem bardzo kosztownego błędu. Następnie wziąłem udział szkoleniu z prospectigu i dostałem konkretne rozwiązania i narzędzia.                    </p>
                    <br /><br />
                    <h6>
                        Jan Kowalski <br />
                        <small>Dyrektor w ...</small>
                    </h6>
                </Col>
                <Col xs={12} lg={4} className="bg-white p-5 m-3">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2021/10/cudzyslow.png" alt="cudzysłów" />
                    <p>
                    Szkolenie bardzo rzeczowe, mocno osadzone w realiach, świetne analizy procesu zakupu i wartości dodanych. Bardzo dobry, bezpośredni kontakt z uczestnikami szkolenia.
                    </p>
                    <br /><br />
                    <h6>
                        Jan Nowak <br />
                        <small>Prezes w ...</small>
                    </h6>
                </Col>
                <Col xs={12} lg={3} className="bg-white p-5 m-3">
                    <img src="https://www.sellwise.pl/wp-content/uploads/2021/10/cudzyslow.png" alt="cudzysłów" />
                    <p>
                    Jeśli szukasz połączenia wiedzy i konkretnych rozwiązań zwiększających efektywność działań sprzedażowych jak i samą sprzedaż – lepiej trafić nie mogłeś.
                    </p>
                    <br /><br />
                    <h6>
                        Dawid Kowalski <br />
                        <small>CEO w ...</small>
                    </h6>
                </Col>
            </Row>
        </Container>
      </Carousel.Item>
    </Carousel>

    <Row className="mt-5">
        <Col xs={12}>
            <span className="fs-1">
                Te marki <strong>zaufały</strong>
            </span>
            <hr />
        </Col>
    </Row>
    </Container>
  );
}

export default OpinionsCarousel;