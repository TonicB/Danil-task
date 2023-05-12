import React, {useEffect} from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from "react";
import axios from 'axios';
import CartDevice from "../components/CartDevice";
import { Device } from "../../../src/models/models";
import { store } from "../storeRedax";
import dotenv from 'dotenv'





const Cart = () => {

  const [phoneNumber, setPhoneNumber] = useState('');

  const sendOrder = async () => {
    try {
      const botToken = '6101633471:AAHGf2Usi65zUPwZX9IiuT59MhIVfYlDDxw';
      console.log(botToken)
      const username = 'AntonSharafiev';
      // const response = await axios.get(`https://api.telegram.org/bot${botToken}/getChat?chat_id=@${username}`);
      // const chatId = response.data.result.id;
      // console.log('Chat ID:', chatId);
      // Отправить уведомление в Telegram
      const message = `Новый заказ!\nИмя пользователя: ${username}`;
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      axios.post(url, {
        chat_id: "-1001816843333",
        text: message
      });

      console.log('Уведомление отправлено в Telegram');
    } catch (error) {
      console.error('Ошибка при отправке уведомления в Telegram:', error);
    }
  }

  const response = store.getState().cartDevices.cartDevices

  return (
    <Container>
      <div>
        {response && response.length > 0 && response.map((device: Device) => (
          <CartDevice cartDevice={device}/>
        ))}
      </div>
      <Form.Control
        className="mt-3"
        placeholder="Введите номер телефона"
        type="tel"
        aria-label="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button
      className="mt-3"
      variant="outline-success"
      onClick={sendOrder}
      >Сделать заказ</Button>
    </Container>
  );
}

export default Cart