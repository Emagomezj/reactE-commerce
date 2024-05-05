import { PropTypes } from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img className="listProductImg" variant="top" src={product.picURL} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
      <Card.Text>{product.categoryId}</Card.Text>
      <Link to={`/item/${product.id}`}>
        <Button variant="primary">Detalles</Button>
      </Link>
    </Card.Body>
  </Card>
);

Item.propTypes = {
  product: PropTypes.object.isRequired,
};
