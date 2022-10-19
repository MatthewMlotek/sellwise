import React from 'react';
import {Col} from 'react-bootstrap'

const CompanyElement = (props) => {
    return (
        <Col xs={12} lg={3}>
            <img src={props.src} alt={props.alt} width="200px"/>
        </Col>
    );
}
 
export default CompanyElement;