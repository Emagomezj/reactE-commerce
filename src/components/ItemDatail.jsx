import { PropTypes } from "prop-types";
import { Container } from "react-bootstrap";
import { useContext } from "react";

import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart, items } = useContext(CartContext);
  const add = (quantity) => {
    addToCart(item, quantity);
  };

  let prevQuantity;

  if (items.find((i) => i.id === item.id)) {
    prevQuantity = items.find((i) => i.id === item.id).quantity;
  } else {
    prevQuantity = 0;
  }

  return (
    <Container className="itemDetail mt-4">
      <h1>{item.title}</h1>
      <img
        src={item.picURL}
        style={{ height: 450, width: "auto" }}
        alt={item.title}
      />
      <p>{item.description}</p>
      <div>{`Categoria: ${
        item.categoryId[0].toUpperCase() + item.categoryId.slice(1)
      }`}</div>
      <div>{`Restantes: ${item.stock}`}</div>
      <div>{`Precio: $${item.price}`}</div>
      <ItemCount stock={item.stock} onAdd={add} onCart={prevQuantity} />
    </Container>
  );
};

export default ItemDetail;

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
};
