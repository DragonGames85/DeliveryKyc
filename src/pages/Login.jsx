import React from "react";
import { Card, Form, Button } from "react-bootstrap";

function login() {

function loginForm() {
  alert("АВТОРИЗИРОВАНО");
}

  return (
    <Card className="m-5 border-dark">
      <Card.Header as="h5">Авторизация</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-2">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button className="mt-3" variant="primary" onClick={loginForm}>
            Отправить
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default login;
