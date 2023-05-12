import React, { useEffect } from "react";
import { Container } from 'react-bootstrap'
import DeviceItem from "../components/DeviceItem";
import { Device } from "../../../src/models/models";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const Products = () => {
  const {devices} = useSelector((state: any) => state.devices);
  const {fetchDevice} = useActions()
  useEffect(() => {
    fetchDevice();
  }, []);

  return (
    <Container>
      <div>
        PRODUCTS
        {devices && devices.length > 0 && devices.map((device: Device) => (
          <DeviceItem device={device}/> // Передаем каждое устройство в DeviceItem
        ))}
      </div>
    </Container>
  );
}

export default Products;
