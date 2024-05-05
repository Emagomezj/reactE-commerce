import { PropTypes } from "prop-types";
import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div className="d-flex">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  products: PropTypes.array.isRequired,
};
