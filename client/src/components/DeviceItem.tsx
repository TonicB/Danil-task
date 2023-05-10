import React from "react";
import { Col, Card, Image } from 'react-bootstrap';
import { Device } from "../../../src/models/models";

interface DeviceItemProps {
  device: Device,
  // img: string | undefined
}


const DeviceItem: React.FC<DeviceItemProps> = (props) => {
  console.log(props)
  return (
  <Col md={3}>
    <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
      <Image width={150} height={150} src={process.env.REACT_APP_API_URL + props.device.img}/>
    </Card>
  </Col>
  )
}
  
export default DeviceItem

