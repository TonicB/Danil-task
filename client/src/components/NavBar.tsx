import React, {useContext} from "react";
// import { Context } from "..";
import UserStore from "../store/UserStore";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  // const {user} : { user?: UserStore }= useContext(Context) ?? {}
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          123
          {/* <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Windsurf Store</NavLink>
            {user?.isAuth ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"}>Admin Panel</Button>
            <Button variant={"outline-light"} className="ml-4" style={{marginLeft: '1rem'}}>Log out</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => user?.setIsAuth(true)}>Authorization</Button>
          </Nav>
          } */}
        </Container>
      </Navbar>
  )
})

export default NavBar