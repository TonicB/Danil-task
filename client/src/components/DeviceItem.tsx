import React, { useEffect } from "react";
import { Col, Card, Image, Button } from 'react-bootstrap';
import { Device } from "../../../src/models/models";
import axios from "axios";
import { setCartDevice } from "../storeRedax/action-creators/cartDevices";
import { store } from "../storeRedax";
import { useDispatch } from "react-redux";

interface DeviceItemProps {
  device: Device,
}


const DeviceItem: React.FC<DeviceItemProps> = (props) => {
  const dispatch = useDispatch();

  const addToCart = async (id: string) => {
    const addedDevice = props.device
    dispatch(setCartDevice(addedDevice));
      console.log(store.getState())
  }
  return (
  <Col md={3}>
    <Card style={{width: 150, cursor: 'pointer'}} border={"light"} className={props.device.deviceId}>
      <Image width={150} height={150} src={process.env.REACT_APP_API_URL + props.device.img}/>
      <Button
      onClick={() => addToCart(props.device.deviceId)}
      >Add to cart</Button>
    </Card>
  </Col>
  )
}
  
export default DeviceItem

function dispatch(arg0: (dispatch: import("redux").Dispatch<import("../types/cartDevices").CartDeviceAction>) => Promise<void>) {
  throw new Error("Function not implemented.");
}

