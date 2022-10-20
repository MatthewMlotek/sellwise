import React from 'react';


import Col from 'react-bootstrap/Col'



const TeamElement = (props) => {
    return (
        <Col xs={12} lg={4} className='text-center p-4 pt-5 border border-gray bg-white'>
            <img src={props.src} alt={props.alt} className='rounded' width="160px"/>
                <br />
            <strong className="fs-5">{props.name}</strong><br />
            <span className="fs-5">{props.role}</span>
            
            
            <hr className='mt-5 ' />
                <a href="#likedin" className='float-start border-end border-gray pe-5 '>
                <img src="https://www.sellwise.pl/wp-content/uploads/2020/03/in.svg" alt="inlogo"
                className='img-fluid'/>
                </a>
            
                
                <a href='#linkedin'>{props.link} <span className='float-end'>
                    &rarr;</span></a>
            
        </Col>
    );
}
 
export default TeamElement;
