import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dish from "../pages/Dish";
import Orders from "../pages/Orders";
import Basket from "../pages/Basket";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { BasketContext, OrderContext } from "../utils/database";
import { useState } from "react";

function AppRouter() {
  const [basket, setBasket] = useState([]);
  const [OrderList, setOrderList] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <OrderContext.Provider value={{ OrderList, setOrderList }}>
        <Routes>
          <Route path="/dish" element={<Dish />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Navigate replace to="/dish" />} />
        </Routes>
      </OrderContext.Provider>
    </BasketContext.Provider>
  );
}

export default AppRouter;
