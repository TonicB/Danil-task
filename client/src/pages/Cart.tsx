import React, {useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from "react";
import axios from 'axios';
import CartDevice from "../components/CartDevice";
import { Device } from "../../../src/models/models";
import { store } from "../storeRedax";




const Cart = () => {

  console.log(store.getState())
  const response = store.getState().cartDevices.cartDevices

  return (
    <Container>
      <div>
        {response && response.length > 0 && response.map((device: Device) => (
          <CartDevice cartDevice={device}/>
        ))}
      </div>
    </Container>
  );
}

export default Cart