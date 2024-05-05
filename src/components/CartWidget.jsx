import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link id="CartWg" to="/cart">
      <div className="d-flex">
        <BsCart2 />
        <span>20</span>
      </div>
    </Link>
  );
};

export default CartWidget;
