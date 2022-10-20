import React from 'react';
import './style.css'

import {Container, Row, Col} from 'react-bootstrap'

import TeamElement from './elements/TeamElement';

let workers = [
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2020/04/sn4-new.png",
        name: "Szymon Negacz",
        role: "Konsultant, Trener Sprzedaży i właściciel SellWise"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2020/10/Iwona-www-uai-258x258.png",
        name: "Iwona Borawska",
        role: "Chief Consulting Officer at SellWise & Konsultant"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/05/nowysellwise.png",
        name: "Michał Balcerzak",
        role: "Konsultant, trener sprzedaży"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2020/11/karol-kierzel.png",
        name: "Karol Kieżel",
        role: "Konsultant, Trener i Marketing Manager"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/03/KolkoSellWise.png",
        name: "Oliwia Polak",
        role: "Chief Financial Officer"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2020/07/ju.png",
        name: "Joanna Urbanowicz",
        role: "Konsultant, Trener i Marketing Manager"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/10/o-nas-sylwetki-2.png",
        name: "Oskar Kazibudzki",
        role: "Konsultant sprzedaży i marketingu B2B"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2021/04/%C5%81ukasz-na-strone%CC%A8-g%C5%82o%CC%81wna%CC%A8--uai-258x258.png",
        name: "Łukasz Połubianko",
        role: "Konsultant sprzedaży B2B, Trener Biznesu"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/02/kolko1.png",
        name: "Alicja Ortynecka",
        role: "Konsultant sprzedaży i marketingu B2B"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2020/05/mst.png",
        name: "Michał Staniszewski",
        role: "Konsultant, Trener Strategii Rozwoju Biznesu"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2020/08/gb.png",
        name: "Gabriela Bajer",
        role: "Konsultant, Trener Rozwoju Sprzedaży"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2021/10/Filip-na-strone%CC%A8--uai-258x258.png",
        name: "Filip Kulikowski",
        role: "Konsultant Sprzedaży B2B i Systemów CRM"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2021/04/Marcin-Piechaczek-na-strone%CC%A8--uai-258x258.png",
        name: "Marcin Piechaczek",
        role: "Business Decelopment Manager"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2021/04/Damian-Szalewicz-na-strone%CC%A8-g%C5%82o%CC%81wna%CC%A8--uai-258x258.png",
        name: "Damian Szalewicz",
        role: "Konsultant, Trener i Marketing Manager"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/02/kolko7.png",
        name: "Gerard Bernat",
        role: "Konsultant Customer Experience i Rozwoju Biznesu"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/05/o-nas-sylwetki-2-uai-258x258.png",
        name: "Karolina Szejka",
        role: "Marketing Manager"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2021/09/Dawid-konsultant-uai-258x258.png",
        name: "Dawid Bychawski",
        role: "Konsultant, Trener Sprzedaży i Rozwoju Biznesu"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2021/09/Joanna-Misiak-na-strone%CC%A8--uai-258x258.png",
        name: "Joanna Misiak",
        role: "Konsultant, Trener i Marketing Manager"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/04/o-nas-sylwetki-2-uai-258x258.png",
        name: "Michał Myszkowski",
        role: "Konsultant sprzedaży B2B"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2020/04/mm-new.png",
        name: "Marta Skowron",
        role: "Head of Business Development"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/02/kolko3.png",
        name: "Jolanta Korczak",
        role: "Konsultant marketingu"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2021/08/Oliwia-na-strone%CC%A8-uai-258x258.png",
        name: "Oliwia Tomczak",
        role: "Business Development Manager"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/04/ziemo_sellwise-uai-258x258.png",
        name: "Ziemowit Rachoń",
        role: "Konsultant Marketingu B2B"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/02/kolko2.png",
        name: "Mirosława Rożek",
        role: "Business Development Manager"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2021/12/marcin2-uai-258x258.png",
        name: "Marcin Kupis",
        role: "Business Development Manager"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2020/11/o-nas-sylwetki-kamil-jedrzejczyk-uai-258x258.png",
        name: "Kamil Jędrzejczyk",
        role: "Business Development"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/10/o-nas-sylwetki-2-2.png",
        name: "Ewa Piechowiak",
        role: "Konsultant, Trener Marketingu B2B"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2022/10/o-nas-sylwetki-2-1.png",
        name: "Krzysztof Kwidzyński",
        role: "Konsultant sprzedaży i sysyemów CRM"
    },
];

const Team = () => {
    return (
        <Container fluid className='bg-light p-5'>
            <Row>
                <Col xs={12}>
                    <span className="fs-1">
                        Nasz <strong>zespół</strong>
                    </span>
                </Col>
            </Row>
            <Row className='mt=5 p-5'>
                {workers.map(worker => (
                    <TeamElement src={worker.src} alt="zdjęcie pracownika" name={worker.name} role={worker.role} link="Poznaj mnie"/>
                ))}
                
                
                
                
                <TeamElement 
                src="https://www.sellwise.pl/wp-content/uploads/2020/05/new-kons-1.png"
                alt="zdjęcie pracownika"
                name="To możesz być Ty"
                role="Dołącz do naszego zespołu"
                link="Skontaktuj się"
                />
            </Row>
        </Container>
    );
}
 
export default Team;