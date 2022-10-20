import React from 'react';
import {Container, Row, Col, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

 const TopBarNav = () => {
    return (
        <Container fluid id="navbar">
        <Row >
          <Col xs={12} id="home">

               
          <Navbar bg="white" expand="lg">
      <Container fluid className='ps-3'>
        <Navbar.Brand><Link to="/">
        <img className='img-fluid' src="https://www.sellwise.pl/wp-content/uploads/2021/10/sellwise_logo_29_retina-1.png" alt="logo" id="logoimg" />
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5">
                <NavDropdown title="O nas" id="about-drop-down">
                  <NavDropdown.Item>
                  <Link to="/o-nas">
                    O nas
                  </Link>
                    </NavDropdown.Item>
                  
                  <NavDropdown.Item>
                  <Link to="/case-study">
                    Case study
                  </Link>
                  </NavDropdown.Item>
                  
                  </NavDropdown>

                <Link to="/doradztwo-w-sprzedazy-i-marketingu-b2b">
                    <Nav.Link>
                      <Link to="/doradztwo">Doradztwo</Link>
                    </Nav.Link>
                </Link>
                  <NavDropdown title="Szkolenia" id="szkolenia-drop-down">
                    <NavDropdown.Item>
                      <Link to="szkolenia-otwarte">Szkolenia otwarte</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/szkolenia-sprzedazowe-zamkniete">
                      Szkolenia sprzedażowe - zamknięte
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Rekrutacja" id="rekrutacja-drop-down">
              <NavDropdown.Item>
                <Link to="/outsourcing-rekrutacji-handlowcow">
                Usługa rekrutacji
                </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/praca">
                  Oferty pracy
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="zostan-konsultantem-sprzedazy">
                  Zostań konsultantem sprzedaży
                </Link>
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Blog" id="blog-drop-down">
              <NavDropdown.Item>
                <Link to="/artykuly">
                Artykuły
                </Link>
                </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/wideo">
                Wideo
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/webinary-sales-rocks">
                Webinary - Sales Rocks
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/nsm">
              Podcast
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/darmowa-konsultacja">
            <Button variant="danger">BEZPŁATNA KONSULTACJA</Button>{' '}
            </Link>
            </Nav.Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  

          </Col>
        </Row>
      </Container>
    );
 }
  
 export default TopBarNav;