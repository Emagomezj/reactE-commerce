import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let refCollection;
    if (!id) {
      refCollection = collection(db, "items");
    } else {
      refCollection = query(
        collection(db, "items"),
        where("categoryId", "==", id)
      );
    }
    getDocs(refCollection)
      .then((snap) =>
        setProducts(
          snap.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        )
      )
      .catch((err) =>
        alert(
          `Ha ocurrido un error, por favor reintente más tarde. Error:${err}`
        )
      );
  }, [id]);
  if (!products)
    return (
      <Container className="spinnerContainer">
        <Spinner
          className="mt-5 d-flex justifi-content-center"
          animation="border"
          role="status"
        >
          <span className="visually-hidden ">Loading...</span>
        </Spinner>
      </Container>
    );
  return (
    <Container className="mt-4">
      <ItemList products={products} />
    </Container>
  );
};

export default ItemListContainer;
