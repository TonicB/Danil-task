import React from "react";
import { Col, Card, Image, Button } from 'react-bootstrap';
import { Device } from "../../../src/models/models";
import axios from "axios";
import { store } from "../storeRedax";

interface CartDeviceItemProps {
  cartDevice: Device,
}


const CartDevice: React.FC<CartDeviceItemProps> = (props) => {
  
  return (
  <Col md={3}>
    <Card style={{width: 150, cursor: 'pointer'}} border={"light"} className={props.cartDevice.deviceId}>
      <Image width={150} height={150} src={process.env.REACT_APP_API_URL + props.cartDevice.img}/>
      {/* Девайс {props.cartDevice.deviceId} */}
    </Card>
  </Col>
  )
}
  
export default CartDevice

