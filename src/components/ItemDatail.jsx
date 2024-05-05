import { PropTypes } from "prop-types";
import { Container } from "react-bootstrap";
import { useContext } from "react";

import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const add = (quantity) => {
    addToCart(item, quantity);
  };

  return (
    <Container className="mt-4">
      <h1>{item.title}</h1>
      <img
        src={item.picURL}
        style={{ height: 450, width: "auto" }}
        alt={item.title}
      />
      <p>{item.description}</p>
      <div>{`Restantes: ${item.stock}`}</div>
      <div>{`Precio: $${item.price}`}</div>
      <ItemCount stock={item.stock} onAdd={add} />
    </Container>
  );
};

export default ItemDetail;

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
};
