import React from "react";
import { Card, Form, Button } from "react-bootstrap";

function Registration() {

  function register() {
    alert("ЗАРЕГИСТРИРОВАНО");
  }

  return (
    <Card className="mr-5 ml-5 mb-5 mt-3 border-dark">
      <Card.Header as="h5">Регистрация</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Имя</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mt-2" controlId="formBasicSex">
            <Form.Label>Пол</Form.Label>
            <Form.Control as="select">
              <option>Мужской</option>
              <option>Женский</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mt-2" controlId="formBasicPhone">
            <Form.Label>Телефон</Form.Label>
            <Form.Control type="tel" />
          </Form.Group>
          <Form.Group className="mt-2" controlId="formBasicBirthdate">
            <Form.Label>Дата рождения</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mt-2" controlId="formBasicAddress">
            <Form.Label>Адрес</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mt-2" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mt-2" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button className="mt-3" variant="primary" onClick={register}>
            Зарегистрироваться
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Registration;
