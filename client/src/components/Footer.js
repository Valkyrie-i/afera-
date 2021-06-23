import React from 'react';
import style from './Footer.module.css'
import {ButtonGroup, ButtonToolbar, Button} from "react-bootstrap";


const Footer = () => {
    return (
        <div className={style.container}>
            <h2 className={style.h2}>Наши социальные сети</h2>
            <ButtonToolbar className="mb-3 mt-5" aria-label="Toolbar with Button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                    <Button variant="secondary">instagram</Button>{' '}
                    <Button variant="secondary">Twitter</Button>{' '}
                    <Button variant="secondary">facebook</Button>{' '}
                    <Button variant="secondary">vk</Button>
                </ButtonGroup>
            </ButtonToolbar>
            <div className={style.info}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    );
};

export default Footer;