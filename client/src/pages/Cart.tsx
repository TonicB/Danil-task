import React, {useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import UserList from '../components/DeviceList'
import { useDispatch } from "react-redux";



const Cart = () => {
  return (
    <Container>
      CART
      {/* <Row className='mt-2'>
        <Col md={3}>
          <TypeBar/>
          
        </Col>
        <Col md={9}>
          <BrandBar/>
        </Col>
          
      </Row> */}

          {/* <UserList/> */}
    </Container>
  )
}

export default Cart