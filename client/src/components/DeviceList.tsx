import React, {useContext} from "react";
import {observer} from "mobx-react-lite"
// import { Context } from "../index"
import DeviceStore from "../store/DeviceStore";
import { Row } from 'react-bootstrap';
import DeviceItem from "./DeviceItem";
import Device from "../store/DeviceStore";





const DeviceList = observer(() => {
  return (
    <Row className="d-flex">
      {/* {device.devices.map(dev =>  */}
      {/* // <DeviceItem key={dev.id} device={dev}/> */}
        
        {/* )} */}
  </Row>
  )
})
  
export default DeviceList

