import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import TargetElement from './elements/TargetElement';

import './style.css'

const elementsPrev = [
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2021/12/uslugi_ikona_b2b-Karolina-czerwone.svg",
        title:"Machina B2B",
        content:"Kompleksowe szkolenie sprzedażowe, dzięki któremu od podstaw zaprojektujesz skuteczny proces sprzedaży dla swojej firmy. Najpierw dowiesz się, jak aktywnie pozyskiwać klientów, a następnie nauczysz się łączyć te działania ze strategią marketingową i sprzedażową.",
        price:"990 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2020/12/ikona-branz%CC%87owa-www_firma-rodzinna.svg",
        title:"Machina B2B 2.0",
        content:"To szkolenie dla managerów, dyrektorów i prezesów, którzy są odpowiedzialni za sprzedaż i marketing. Pokazuje krok po kroku, jak zaplanować skuteczne działania sprzedażowe oraz zrealizować plan wspólnie z działami sprzedaży i marketingu.",
        price:"1190 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2021/02/ikona-branz%CC%87owa-nowe_media.png",
        title:"Marketing B2B - Lead Generation",
        content:"Od stworzenia solidnych fundamentów po zbudowanie strategii marketingowej, która generuje leady. W trakcie tego szkolenia nauczysz się budować, wdrażać i prowadzić marketing, który zwiększa sprzedaż.",
        price:"990 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2022/03/1241245.png",
        title:"Remote Sales Academy",
        content:"Praktyczne szkolenie, podczas którego odkryjesz możliwości sprzedaży poprzez spotkania online. Dowiesz się, jak umawiać video spotkania z klientami, jak się do nich przygotować, jakich narzędzi użyć i co zrobić, żeby skuteczność sprzedaży była wysoka.",
        price:"1259 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
]

const elements1 = [
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2021/12/uslugi_ikona_b2b-Karolina-czerwone.svg",
        title:"Machina B2B",
        content:"Kompleksowe szkolenie sprzedażowe, dzięki któremu od podstaw zaprojektujesz skuteczny proces sprzedaży dla swojej firmy. Najpierw dowiesz się, jak aktywnie pozyskiwać klientów, a następnie nauczysz się łączyć te działania ze strategią marketingową i sprzedażową.",
        price:"990 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2020/12/ikona-branz%CC%87owa-www_firma-rodzinna.svg",
        title:"Machina B2B 2.0",
        content:"To szkolenie dla managerów, dyrektorów i prezesów, którzy są odpowiedzialni za sprzedaż i marketing. Pokazuje krok po kroku, jak zaplanować skuteczne działania sprzedażowe oraz zrealizować plan wspólnie z działami sprzedaży i marketingu.",
        price:"1190 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2021/02/ikona-branz%CC%87owa-nowe_media.png",
        title:"Marketing B2B - Lead Generation",
        content:"Od stworzenia solidnych fundamentów po zbudowanie strategii marketingowej, która generuje leady. W trakcie tego szkolenia nauczysz się budować, wdrażać i prowadzić marketing, który zwiększa sprzedaż.",
        price:"990 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2022/05/Obszar-roboczy-1-1.svg",
        title:"Kupując całą ścieżkę płacisz 25% mniej",
        content:"",
        // price:"2377 zł netto",
        price: " 2377 zł",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
]
const elements2 = [
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2021/12/uslugi_ikona_b2b-Karolina-czerwone.svg",
        title:"Machina B2B",
        content:"Kompleksowe szkolenie sprzedażowe, dzięki któremu od podstaw zaprojektujesz skuteczny proces sprzedaży dla swojej firmy. Najpierw dowiesz się, jak aktywnie pozyskiwać klientów, a następnie nauczysz się łączyć te działania ze strategią marketingową i sprzedażową.",
        price:"990 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2021/02/ikona-branz%CC%87owa-nowe_media.png",
        title:"Marketing B2B - Lead Generation",
        content:"Od stworzenia solidnych fundamentów po zbudowanie strategii marketingowej, która generuje leady. W trakcie tego szkolenia nauczysz się budować, wdrażać i prowadzić marketing, który zwiększa sprzedaż.",
        price:"990 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2022/05/Obszar-roboczy-1-1.svg",
        title:"Kupując całą ścieżkę płacisz 25% mniej",
        content:"",
        // price:"2377 zł netto",
        price: " 1485 zł",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
]
const elements4 = [
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2021/12/uslugi_ikona_b2b-Karolina-czerwone.svg",
        title:"Machina B2B",
        content:"Kompleksowe szkolenie sprzedażowe, dzięki któremu od podstaw zaprojektujesz skuteczny proces sprzedaży dla swojej firmy. Najpierw dowiesz się, jak aktywnie pozyskiwać klientów, a następnie nauczysz się łączyć te działania ze strategią marketingową i sprzedażową.",
        price:"990 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2022/03/1241245.png",
        title:"Remote Sales Academy",
        content:"Praktyczne szkolenie, podczas którego odkryjesz możliwości sprzedaży poprzez spotkania online. Dowiesz się, jak umawiać video spotkania z klientami, jak się do nich przygotować, jakich narzędzi użyć i co zrobić, żeby skuteczność sprzedaży była wysoka.",
        price:"1259 zł netto",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
    {
        src:"https://www.sellwise.pl/wp-content/uploads/2022/05/Obszar-roboczy-1-1.svg",
        title:"Kupując całą ścieżkę płacisz 25% mniej",
        content:"",
        // price:"2377 zł netto",
        price: " 1686 zł",
        description:"Dostęp natychmiastowy",
        href:"#link",
    },
]


class TargetContainer extends React.Component {
    state = {
        elements: elementsPrev
    } 


    
    handleClick = (action) => {
        if(action=== "action1") {
            this.setState({
                elements: elements1
            })
        }else if(action === "action2") {
            this.setState({
                elements: elements2
            })
        }else if(action === "action3") {
            this.setState({
                elements: elements2
            })
        }else if(action === "action4") {
            this.setState({
                elements: elements4
            })
        }else {
            this.setState({
                elements: elementsPrev
            })
        }
    }

    
    

    render() { 
        return (
            
                    <Container fluid className='p-5' style={{background: "#282958", color: "#fff"}}>
                        <Row>
                            <Col xs={12} className='p-lg-5'>
                                <span className="fs-1">
                                    Osiągaj lepsze wyniki dzięki <strong>ścieżkom rozwojowym</strong> dopasowanym do twoich potrzeb
                                </span>
                                <p>Wybierz pasującą do Ciebie ścieżkę rozwojową i znajdź szkolenie, które najlepiej odpowiada na Twoje potrzeby.</p>
                            </Col>
                            <Col>
                            <span className="p-5 fs-1">
                                <strong>Wybierz </strong> swój cel:
                            </span>
                            </Col>
                        </Row>
                        <Row className="text-black p-lg-5 gy-3">
                            <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
                            <Col xs={12} lg={2}  onClick={() => this.handleClick("action1")} className="bg-white targetButton p-3 border-end border-black">
                                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/szkolenia_ikona_zarzadzanie_soba_w_czasie.svg" alt="" className="img-fluid" />
                                <p className="fs-3">
                                    Chcę skutecznie <strong>zarządzać</strong>
                                </p>
                            </Col>
                            <Col xs={12} lg={2}  onClick={() => this.handleClick("action2")} className="bg-white targetButton p-3 border-end border-black">
                                <img src="https://www.sellwise.pl/wp-content/uploads/2022/06/szkolenia_ikona_empatyczne_negocjacje.svg" alt="" className="img-fluid" />
                                <p className="fs-3">
                                    Chcę zdobywać <br /> więcej <strong>leadów</strong>
                                </p>
                            </Col>
                            <Col xs={12} lg={2}  onClick={() => this.handleClick("action3")} className="bg-white targetButton p-3 border-end border-black">
                                <img src="https://www.sellwise.pl/wp-content/uploads/2022/04/szkolenia_ikony_Marketing_B2B.svg" alt="" className="img-fluid" />
                                <p className="fs-3">
                                    Chcę usprawnić <strong>marketing</strong>
                                </p>
                            </Col>
                            <Col xs={12} lg={2}  onClick={() => this.handleClick("action4")} className="bg-white targetButton p-3">
                                <img src="https://www.sellwise.pl/wp-content/uploads/2022/06/Szkolenia-sprzedaz%CC%87owo-marketingowe-_-Sellwise.pl-3.svg" alt="" className="img-fluid" />
                                <p className="fs-3">
                                    Chcę lepiej <strong>sprzedawać</strong>
                                </p>
                            </Col>

                            <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
                        </Row>
                        <Row className='p-lg-5'>
                        <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
                           <Col xs={12} lg={8}>
                           <p className='fs-2'>
                            Poniżej znajdziesz wszystkie nasze szkolenia. Wybierz takie, które jest odpowiednie dla Ciebie za pomocą naszych ścieżek rozwojowych.
                            </p>
                           </Col>
                           <Col lg={2} className="d-none d-lg-block">&nbsp;</Col>
                        </Row>

                        <Row className='text-black ' >
                                
                                {this.state.elements.map((element) =>  (
                                    <TargetElement
                                    key={element.title}
                                        src={element.src}
                                        title={element.title}
                                        content={element.content}
                                        price={element.price}
                                        description={element.description}
                                        href={element.href}
                                    />
                                ))
                                }
                            <Col xs={12} className="text-center p-5 ">
                                <Button variant='danger' size='big' onClick={this.handleClick} style={{fontSize: "25px"}}>ZOBACZ WSZYTSKIE SZKOLENIA</Button>
                            </Col>
                        </Row>
                    </Container>

        );
    }
}
 
export default TargetContainer;