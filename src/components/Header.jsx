import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Header.css";

const Header = () => {
  const { getTotalCount } = useContext(CartContext);

  return (
    <header className="header">
      <div className="cart-counter">
        Total productos en el carrito: {getTotalCount()}
      </div>
    </header>
  );
};

export default Header;
