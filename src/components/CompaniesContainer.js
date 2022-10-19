import React from 'react';
import {Container, Row} from 'react-bootstrap'

import CompanyElement from './elements/CompanyElement';

const CompaniesContainer = () => {
    return (
        <Container fluid className="p-5 bg-light text-center">
            <Row className="gy-5">
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/03/future-processing.png"}
                alt={"Future Processing logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/04/eqsystem.png"}
                alt={"eq system logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/04/sylius.png"}
                alt={"Sylius logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/04/bitbag.png"}
                alt={"BitBag logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/04/intellect.png"}
                alt={"Intellect logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2021/01/duon-258x86-1.png"}
                alt={"Duon logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/04/wkret-met.png"}
                alt={"Wkręt-met logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/04/alnor2.png"}
                alt={"Alnor logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2022/03/Nowodvorski-2.png"}
                alt={"Nowodvorski logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/04/wpc.png"}
                alt={"WPC logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/04/seko.png"}
                alt={"Seko logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2020/04/trenkwalder.png"}
                alt={"Trenkwalder logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2021/01/inspeerity-258x86-1.png"}
                alt={"Inspeerity logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2021/01/leanpassion-258x86-1.png"}
                alt={"LeanPassion logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2021/01/lunching-258x86-1.png"}
                alt={"Lunching logo"} 
                />
                <CompanyElement 
                src={"https://www.sellwise.pl/wp-content/uploads/2021/01/liki-258x86-1.png"}
                alt={"Liki logo"} 
                />
            </Row>
        </Container>
    );
}
 
export default CompaniesContainer;