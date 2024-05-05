import { useEffect, useState } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Spinner, Container } from "react-bootstrap";

import ItemDetail from "./ItemDatail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);
    getDoc(refDoc).then((resp) => {
      setItem({ id: resp.id, ...resp.data() });
    });
  });
  if (!item)
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
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
