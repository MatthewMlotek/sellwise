import React from 'react';

import {Container, Row, Col} from 'react-bootstrap'
import ResultElement from './elements/ResultElement';

const ProjectsResults = () => {
    return (
        <Container fluid className='p-4 bg-white'>
            <Row>
                <Col xs={12}>
                    <span className="fs-1">
                        Zobacz rezultaty naszych <strong>projektów</strong>
                    </span>
                </Col>
            </Row>
            <Row className=' py-5 justify-content-center'>
                <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/10/okladka-tlo-kopia-39-uai-720x382.png" alt="" href="#result1"/>
                <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2022/08/Lunching-okladka-uai-720x382.jpg" alt="" href="#result2"/>
                <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/06/okladka-tlo-kopia-31-uai-720x382.png" alt="" href="#result3"/>
                <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/05/okladka-tlo-kopia-28-uai-720x382.png" alt="" href="#result4"/>
                <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/01/okladka-tlo-kopia-27-uai-720x382.png" alt="" href="#result5"/>
                <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/01/okladka-tlo-kopia-33-uai-720x382.png" alt="" href="#result6"/>
                <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/01/okladka-tlo-kopia-34-uai-720x382.png" alt="" href="#result7"/>
                <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2021/01/okladka-tlo-kopia-35-uai-720x382.png" alt="" href="#result8"/>
                <ResultElement src="https://www.sellwise.pl/wp-content/uploads/2020/09/okladka-tlo-kopia-32-uai-720x382.png" alt="" href="#result9"/>
                
            </Row>
        </Container>
    );
}
 
export default ProjectsResults;