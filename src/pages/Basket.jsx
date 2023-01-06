import React, { useState, useContext } from "react";
import { BasketContext, OrderContext } from "../utils/database";
import { Card, Button, Image, Col, Row, Container } from "react-bootstrap";

function Basket() {
  const { basket, setBasket } = useContext(BasketContext);
  const { OrderList, setOrderList } = useContext(OrderContext);

  return (
    <div>
      <Card className="m-5 border-dark">
        <Card.Header as="h4">Товары в корзине</Card.Header>
        {!basket.length && (
          <Card.Body>
            <div className="text-center">Корзина пуста</div>
          </Card.Body>
        )}
        {basket.length > 0 && (
          <>
            <Card.Body>
              {basket.map((dish, index) => (
                <Container>
                  <Row className="border border-black p-2 align-items-center">
                    <Col xxl={4}>
                      {index + 1}.{" "}
                      <Image src={dish.image} height="60px" rounded />{" "}
                    </Col>
                    <Col xxl={6}>
                      <div className="name-category-column ml-3 mt-3">
                        <strong>{dish.name}</strong>
                        <br />
                        <p>Цена/шт: {dish.price} руб.</p>
                      </div>
                    </Col>
                    <Col xxl={2} className="ml-auto">
                      <Button
                        variant="danger"
                        onClick={() => {
                          setBasket(
                            basket.filter(
                              (item, itemIndex) => index !== itemIndex
                            )
                          );
                        }}
                      >
                        Удалить
                      </Button>
                    </Col>
                  </Row>
                </Container>
              ))}
            </Card.Body>
            <Card.Footer className="text-center">
              <Button
                className="mx-auto"
                variant="success"
                onClick={() => {
                  setOrderList([...OrderList, basket]);
                  setBasket([]);
                }}
              >
                Создать заказ
              </Button>
            </Card.Footer>
          </>
        )}
      </Card>
    </div>
  );
}

export default Basket;
