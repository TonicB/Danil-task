import React, { useEffect, useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { setDevice } from '../storeRedax/action-creators/devises';
import { useDispatch } from 'react-redux';

const Create: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<File | null>(null);
  const dispatch = useDispatch();

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price.toString());
    if (image) {
      formData.append('image', image);
    }
    axios.post('http://localhost:5000/api/device', formData)
  .then(response => {
    // Обработка успешного ответа
  })
  .catch(error => {
    console.log(error);
    // Обработка ошибки
  });
  };

  const selectFile = (e: any) => {
    
    console.log(e.target.file)
  }
  return (
     <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
      >

    <Form style={{width: 600}}>
      <Form.Control
        className="mt-3"
        placeholder="Введите название"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <Form.Control
        className="mt-3"
        placeholder="Цена"
        type="text"
        min={0}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        />
      <Form.Control
        className="mt-3"
        type="file"
        onChange={selectFile}
        // {(e) => setImage((e.target as HTMLInputElement).files?.[0] || null)}
        />
      <Button
      className="mt-3"
      variant="outline-success"
      onClick={submitHandler}
      >Добавить</Button>
    </Form>
      </Container>
  );
};

export default Create;