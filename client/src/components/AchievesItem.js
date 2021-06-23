import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

const AchievesItem = ({achieves}) => {
    return (
        <Col md={4} className="mt-5">
            <Card className="d-flex flex-column align-items-center justify-content-start" style={{minHeight:400,width:300}}>
                <Image width={300} height={200} src={process.env.REACT_APP_API_URL + achieves.img}/>
                <div className="d-flex flex-column align-items-center" style={{color:'white',wordBreak:'break-all',margin:'0 15px 0 15px'}}>
                    <h5 style={{color:'#004242',fontFamily:'sans-serif',margin:'0px 10px 0 10xp',wordBreak:'break-all',textAlign:'center'}}>{achieves.title}</h5>
                    <p style={{color:'#004242',fontFamily:'sans-serif',margin:'0px 10px 0 10xp',wordBreak:'break-all'}}>{achieves.description}</p>
                </div>
            </Card>
        </Col>
    );
};

export default AchievesItem;