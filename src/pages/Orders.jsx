import React, { useContext } from "react";
import { OrderContext } from "../utils/database";
import { Card} from "react-bootstrap";
function Orders() {
  const { OrderList, setOrderList } = useContext(OrderContext);

  const countPrice = dishArr => {
    let price = 0;
    dishArr.map(dish => {
      price += dish.price;
    });
    return price;
  };

  return (
    <div>
      <Card className="m-5 border-dark">
        <Card.Header as="h4">Последние заказы</Card.Header>
        {!OrderList.length && (
          <Card.Body>
            <div className="text-center">Заказов нет</div>
          </Card.Body>
        )}
        {OrderList.length > 0 && (
          <Card.Body className="d-block ">
            {OrderList.map((dishArr, index) => (
              <div className="border border-black p-2 align-items-center">
                {index + 1}.{" "}
                <strong>
                  ID: {(Date.now() / (index + 1)) * countPrice(dishArr)}
                </strong>
                <div>Цена: {countPrice(dishArr)} руб.</div>
              </div>
            ))}
          </Card.Body>
        )}
      </Card>
    </div>
  );
}

export default Orders;
