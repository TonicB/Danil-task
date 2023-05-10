import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevice } from "../storeRedax/action-creators/devises";
import { store } from '../storeRedax'
import DeviceItem from "../components/DeviceItem";
import { RootState } from "../storeRedax/reducers";
import { Device } from "../../../src/models/models";
import axios from "axios";

const Products = () => {
  const [response, setResponse] = useState<any>(null); // Используем состояние для хранения ответа

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/device');
      setResponse(response.data); // Сохраняем ответ в состояние
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div>
        PRODUCTS
        {response && response.length > 0 && response.map((device: Device) => (
          <DeviceItem device={device} /> // Передаем каждое устройство в DeviceItem
        ))}
      </div>
    </Container>
  );
}

export default Products;
