import React from 'react';
import {Container, Row, Col, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';

 const TopBarNav = () => {
    return (
        <Container fluid id="navbar">
        <Row id="home">
          <Col xs={12} >

          <Navbar bg="white" expand="lg">
      <Container fluid className='ps-3'>
        <Navbar.Brand href="#home">
        <img className='img-fluid' src="https://www.sellwise.pl/wp-content/uploads/2021/10/sellwise_logo_29_retina-1.png" alt="logo" id="logoimg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5">
                <NavDropdown title="O nas" id="about-drop-down">
                  <NavDropdown.Item href="#action/3.1">O nas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"> Case study
                  </NavDropdown.Item>
                  </NavDropdown>
            <Nav.Link href="#link">Doradztwo</Nav.Link>
                  <NavDropdown title="Szkolenia" id="szkolenia-drop-down">
                    <NavDropdown.Item href="#action/3.1">Szkolenia otwarte</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Szkolenia sprzedażowe - zamknięte
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Rekrutacja" id="rekrutacja-drop-down">
              <NavDropdown.Item href="#action/3.1">Usługa rekrutacji</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Oferty pracy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Zostań konsultantem sprzedaży
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Blog" id="blog-drop-down">
              <NavDropdown.Item href="#action/3.1">Artykuły</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Wideo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Webinary - Sales Rocks
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Podcast</Nav.Link>
            <Nav.Link href="#link">
            <Button variant="danger">BEZPŁATNA KONSULTACJA</Button>{' '}
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