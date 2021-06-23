import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ACHIEVES_ROUTE, ADMIN_ROUTE, FAQ_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, TEACHERS_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom';

const NavBar = observer (() => {

    const {user} = useContext(Context)
    const history = useHistory()

    const logOut =()=>{
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={MAIN_ROUTE}>Главная</NavLink>
                <NavLink style={{color:'white',marginLeft:'100px'}} to={TEACHERS_ROUTE}>Учителя</NavLink>
                <NavLink style={{color:'white',marginLeft:'100px'}} to={ACHIEVES_ROUTE}>Достижения</NavLink>
                <NavLink style={{color:'white',marginLeft:'100px'}} to={FAQ_ROUTE}>FaQ</NavLink>
                <NavLink style={{color:'white',marginLeft:'100px'}} to={''}>Chat</NavLink>
                {user.isAuth ? <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={()=>logOut()} >Выйти</Button>
                        <Button variant={"outline-light"} onClick={()=>history.push(ADMIN_ROUTE)}  className="ml-2">Админ Панель</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={()=> history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;