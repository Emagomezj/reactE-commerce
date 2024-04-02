import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

import data from "../data/products.json";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      if (!id) {
        setProducts(data);
      } else {
        const filtered = data.filter((product) => product.category === id);
        setProducts(filtered);
      }
    });
  }, [id]);
  if (!products) return <h1>Cargando...</h1>;
  return (
    <Container className="mt-4">
      <ItemList products={products} />
    </Container>
  );
};

export default ItemListContainer;
