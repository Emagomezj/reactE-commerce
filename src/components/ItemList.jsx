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
