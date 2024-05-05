import { useState } from "react";

const Itemquantity = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    onAdd(quantity);
    setQuantity(1);
  };

  return (
    <>
      <div className="d-flex">
        <button className="inc-dec-quantity" onClick={handleDecrease}>
          -
        </button>
        <div>{quantity}</div>
        <button className="inc-dec-quantity" onClick={handleIncrease}>
          +
        </button>
      </div>
      <button onClick={handleAdd}> Agregar al carrito </button>
    </>
  );
};

export default Itemquantity;
