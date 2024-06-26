import { useState } from "react";

const Itemquantity = ({ stock, onAdd, onCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity + onCart < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (onCart < stock) {
      onAdd(quantity);
    } else {
      alert("No hay más stock");
    }
    setQuantity(1);
  };
  if (onCart) {
    return (
      <div className="divItemCount">
        <div>En el carrito: {onCart}</div>
        <div className="d-flex itemCount">
          <button className="inc-dec-quantity" onClick={handleDecrease}>
            -
          </button>
          <div>{quantity}</div>
          <button className="inc-dec-quantity" onClick={handleIncrease}>
            +
          </button>
        </div>
        <button className="btn-add" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    );
  } else {
    return (
      <div className="divItemCount">
        <div className="d-flex itemCount">
          <button className="inc-dec-quantity" onClick={handleDecrease}>
            -
          </button>
          <div>{quantity}</div>
          <button className="inc-dec-quantity" onClick={handleIncrease}>
            +
          </button>
        </div>
        <button className="btn-add" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    );
  }
};

export default Itemquantity;
