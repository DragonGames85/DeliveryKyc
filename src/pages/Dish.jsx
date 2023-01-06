import React, { useState, useEffect, useRef, useContext } from "react";
import { useObserver } from "../hooks/useObserver";
import { useFetching } from "../hooks/useFetching";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import DishService from "../API/DishService";
import Loader from "../components/interface/Loader/Loader";
import { BasketContext } from "../utils/database";

function Dish() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [size, setSize] = useState(0);
  const [dishArray, setDishArray] = useState([]);
  const lastElement = useRef();
  const { basket, setBasket } = useContext(BasketContext);
  const [fetchDish, isDishLoading, dishError] = useFetching(async page => {
    const response = await DishService.getAll(page);
    setDishArray([...dishArray, ...response.data.dishes]);
    setTotalPages(response.data.pagination.count);
    setSize(response.data.pagination.size);
  });

  useObserver(lastElement, page < totalPages, isDishLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchDish(page);
  }, [page]);

  return (
    <Container style={{ zIndex: 2, position: "relative" }}>
      {dishError && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Произошла ошибка. Повторите попытку позже.</h1>
        </div>
      )}

      {isDishLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      )}
      {size >= 4 && (
        <Row>
          {dishArray.map(dish => (
            <Col sm={4} className="">
              <Card className="mx-auto mt-3 mb-3" style={{ width: "17rem" }}>
                <Card.Img
                  variant="top"
                  src={dish.image}
                  style={{ height: "170px" }}
                />
                <Card.Body>
                  <Card.Title
                    className="my-auto"
                    style={{
                      fontFamily: "Franklin Gothic Medium",
                      height: "50px",
                    }}
                  >
                    {dish.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted mt-2">
                    Категория блюда - {dish.category}
                  </Card.Subtitle>
                  <Card.Text style={{ height: "180px", overflow: "auto" }}>
                    {dish.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-bold">
                  <div className="text-center">Цена - {dish.price}р</div>
                  <Button
                    className="ml-4 mt-2"
                    variant="outline-success"
                    onClick={() => {
                      setBasket([...basket, dish]);
                    }}
                  >
                    Добавить в корзину
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <div ref={lastElement} style={{ height: 20, opacity: 0 }} />
    </Container>
  );
}

export default Dish;
