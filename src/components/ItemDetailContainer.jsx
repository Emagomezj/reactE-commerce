import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

import data from "../data/products.json";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      const obj = data.find((p) => p.id === Number(id));
      //const index = Number(id) - 1;
      setProduct(obj);
    });
  });
  if (!product) return <h1>Cargando...</h1>;
  const altString = "imagen de " + product.title;
  return (
    <Container className="mt-4">
      <h1>{product.title}</h1>
      <img src={product.pictureUrl} alt={altString} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </Container>
  );
};

export default ItemDetailContainer;
