import React from 'react';
import '../o-nas/style.css'

import {Container, Row, Col} from 'react-bootstrap'

import TeamElement from '../o-nas/elements/TeamElement'

let workers = [
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2020/10/Iwona-www-uai-258x258.png",
        name: "Iwona Borawska",
        role: "Chief Consulting Officer at SellWise & Konsultant"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2020/12/Ania-Negacz1-uai-258x258.png",
        name: "Anna Negacz",
        role: "Business Development Manager"
    },
    {
        src: "https://www.sellwise.pl/wp-content/uploads/2021/02/Ania-Filipowicz-na-strone%CC%A8-uai-258x258.png",
        name: "Anna Filipowicz",
        role: "Specjalista ds. Rekrutacji"
    },
];

const RekrutacjaTeam = () => {
    return (
        <Container fluid className='bg-light p-5'>
            <Row>
            <Col lg={2} className="d-none d-lg-block"></Col>
                <Col xs={12} lg={8}>
                    <span className="fs-1">
                        Ten zespół poprowadzi <strong>Twoją rekrutację</strong>
                    </span>
                </Col>
                <Col lg={2} className="d-none d-lg-block"></Col>
            </Row>
            <Row className='mt=5 p-5'>
                {workers.map(worker => (
                    <TeamElement src={worker.src} alt="zdjęcie pracownika" name={worker.name} role={worker.role} link="Poznaj mnie"/>
                ))}
            </Row>
        </Container>
    );
}
 
export default RekrutacjaTeam;