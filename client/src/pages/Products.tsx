import React, {useEffect} from "react";
import { Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevice } from "../storeRedax/action-creators/devises";
import { store } from '../storeRedax'
import DeviceItem from "../components/DeviceItem";
import { RootState } from "../storeRedax/reducers";
import { Device } from "../../../src/models/models";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDevice());
  }, [dispatch]);

  const device = useSelector<RootState, Device[]>((state) => state.devices.devices)
  console.log(device)
  return (
    <Container>
      PRODUCTS
      {device.length > 0 && device.map(device => <DeviceItem device={device} />)}
    </Container>
  )
}

export default Products