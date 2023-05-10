import {Container, Card, Form, Button, Row } from "react-bootstrap"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { NavLink, useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
      >
        <Card style={{width: 600}}  className="p-5">
          <h2 className="m-auto">{isLogin? "Authorization" : "Sign up"}</h2>
          <Form className="d-flex flex-column">
            <Form.Control
              className="mt-3"
              placeholder="Enter your email..."
              />
              <Form.Control
              className="mt-3"
              placeholder="Enter your password..."
              />
              <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                {isLogin ?
              <div 
              style={{ width: 'fit-content'}}
              >
                Don't have account? <NavLink to={REGISTRATION_ROUTE}>Sign up.</NavLink>
              </div>
              :
              <div
              style={{ width: 'fit-content'}}
              >
                Have account? <NavLink to={LOGIN_ROUTE  }>Login.</NavLink>
              </div>
              }
              <Button style={{ width: 'fit-content'}} className="mt-3 align-self-end" variant={"outline-success"}>
                {isLogin? "Login" : "Sign up"}
              </Button>
              </Row>
          </Form> 
        </Card>
      </Container>
  )
}

export default Auth;
