import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
  const { items } = useContext(CartContext);
  const total = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link id="CartWg" to="/cart">
      <div className="d-flex">
        <BsCart2 />
        <span>{total}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
