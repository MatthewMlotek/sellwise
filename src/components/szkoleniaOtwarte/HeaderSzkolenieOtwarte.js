import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const HeaderSzkolenieOtwarte = () => {
    return (
        
                    <Container fluid  className='bg-white ' style={{marginTop: "100px"}}>
                        <Row style={{background: "#f1f1f1"}} className="p-5">
                            <Col xs={12} lg={6} className="p-5" >
                                <span className="fs-1">
                                    <strong>Szkolenia</strong> z marketingu i sprzedaży B2B
                                </span>
                                <ul style={{listStyleType: "disc", color: "black", marginTop: "50px"}}>
                                    <li>5 kompleksowych programów szkoleniowych </li>
                                    <li>dziesiątki praktycznych szablonów do zastosowania w pracy</li>
                                    <li>sprawdzone procesy, które zwiększają sprzedaż</li>
                                </ul>
                                <Button variant='danger' size='big' className='p-3'>SPRAWDŹ SZKOLENIA</Button>
                            </Col>
                            <Col  lg={6} className="p-5 d-none d-lg-block">
                                <img src="https://www.sellwise.pl/wp-content/uploads/2022/02/Szymon-kwadrat-uai-1032x1032.png" alt="" className="img-fluid rounded-circle" />
                            </Col>
                        </Row>
                        <Row className='mt-5 p-5 fs-5'>
                            <Col xs={12}>
                                <span className="fs-2">
                                Poznaj szkolenia, które pasują do <strong>firm B2B</strong>
                                </span>
                                <p>
                                Zauważyliśmy, że większość firm B2B ma <strong>chaotyczną sprzedaż i marketing.</strong> Przez to pomimo dobrych produktów, firmy te <strong>nie rosną</strong> tak szybko, jak powinny. 
                                </p>
                                <p>
                                Jednocześnie specjalistom bardzo trudno jest znaleźć informacje o tym, jak prowadzić sprzedaż i marketing B2B, które przynoszą rezultaty i są spójne z rynkiem, produktami oraz możliwościami firmy. 
                                </p>
                                <p>
                                Jak rozwiązaliśmy ten problem? Zaprojektowaliśmy szkolenia, które pasują do firm B2B. Dzięki nim handlowcy i marketerzy uczą się budować z klientami biznesowymi relacje, które <strong>zwiększają ich zaufanie</strong> i pozwalają zwiększyć sprzedaż. W naszych szkoleniach znajdziesz wszystko, czego potrzebujesz do strategicznego prowadzenia działań marketingowych i sprzedażowych B2B: <strong>praktyczną wiedzę,</strong> do której możesz wrócić w każdym momencie i <strong>szablony</strong> do wykorzystania podczas pracy.
                                </p>
                                <p><strong>
                                Poprzez warsztatową formę naszych szkoleń, każdy z uczestników może dopasować procesy i strategie do swojej firmy, branży, usługi i produktu.</strong></p>
                            </Col>
                        </Row>
                        <Row className='p-5 fs-5'>
                            <Col xs={12} lg={4} className="p-5">
                                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/szkolenia_ikona_zarzadzanie_soba_w_czasie.svg" alt="" className=''/>
                                <p>
                                    <strong>Ucz się od specjalistów</strong> <br />
                                    Szkolenia bazują na naszym doświadczeniu w prowadzeniu sprzedaży i marketingu dla setek klientów biznesowych agencji SellWise i AdWise.
                                </p>
                            </Col>
                            <Col xs={12} lg={4} className="p-5">
                                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/szkolenia_ikona_prezentacje_i_wsparcie_sprzedazowe.svg" alt="" className=''/>
                                <p>
                                    <strong>Buduj relacje i zwiększaj zyski</strong> <br />
                                    Poznaj, słuchaj i zrozum swoich klientów prowadząc ich przez proces zakupu, a następnie zwiększaj sprzedaż, korzystając z najlepszych strategii i narzędzi.
                                </p>
                            </Col>
                            <Col xs={12} lg={4} className="p-5">
                                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/szkolenia_ikona_komunikacja_niewerbalna.svg" alt="" className=''/>
                                <p>
                                    <strong>Rozwijaj marketing i sprzedaż</strong> <br />
                                    Osiagaj lepsze wyniki, wdrażając przetestowane przez nas procesy i strategie oparte na budowaniu zaufania wśród klientów.
                                </p>
                            </Col>
                        </Row>
                    </Container>
        
    );
}
 
export default HeaderSzkolenieOtwarte;