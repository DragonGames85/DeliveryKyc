import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import cl from "../styles/navbar.module.css";
function navbar() {
  return (
    <Navbar bg="dark" className="" style={{ zIndex: 1 }}>
      <Navbar.Brand>
        <div className="text-white">Delivery.Kyc</div>
      </Navbar.Brand>
      <Nav className="mr-auto mt-1">
        <NavItem>
          <Link className={cl.navbar__links + " dishLink mr-3 p-1"} to="/dish">
            Меню
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className={cl.navbar__links + " ordersLink mr-3 p-1"}
            to="/orders"
          >
            Заказы
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className={cl.navbar__links + " basketLink mr-3 p-1"}
            to="/basket"
          >
            Корзина
          </Link>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem>
          <Link
            className={cl.navbar__links + " loginLink mr-3 p-1 mt-1"}
            to="/login"
          >
            Войти
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className={cl.navbar__links + " regLink mr-3 p-1 mt-1"}
            to="/registration"
          >
            Регистрация
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default navbar;
