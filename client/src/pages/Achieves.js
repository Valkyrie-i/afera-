import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchAchieves} from "../http/achievesAPI";
import {Col, Container, Row} from "react-bootstrap";
import AchievesList from "../components/AchievesList";


const Achieves = observer(() => {

    const {achieves} = useContext(Context)

    useEffect(()=>{
        fetchAchieves().then(data=> achieves.setAchieves(data))
    },[])

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <AchievesList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Achieves;