import React, {useContext} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import AchievesItem from "./AchievesItem";
import {observer} from "mobx-react-lite";

const AchievesList = observer(() => {

    const {achieves} = useContext(Context)

    return (
        <Row className="d-flex">
            {achieves.achieves.map(achieves =>
                <AchievesItem key={achieves.id} achieves={achieves}/>
            )}
        </Row>
    );
})

export default AchievesList;