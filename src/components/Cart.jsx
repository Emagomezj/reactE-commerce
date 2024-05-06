import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);

  const { items, clearCart, removeFromCart } = useContext(CartContext);

  const total = () => items.reduce((a, i) => a + i.quantity * i.price, 0);

  const handleChange = (e) => {
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    if (values.name === "" || values.phone === "" || values.email === "") {
      return alert("Debe completar todos los campos");
    } else {
      const order = {
        buyer: values,
        items,
        total: total(),
      };
      const db = getFirestore();
      //Restar las cantidadas compradas a los stocks
      items.map((i) => {
        const item = doc(db, "items", i.id);
        updateDoc(item, {
          stock: i.stock - i.quantity,
        });
      });

      const orders = collection(db, "orders");
      addDoc(orders, order)
        .then(({ id }) => {
          if (id) {
            alert(`Orden ${id} realizada con exito`);
          }
        })
        .finally(() => {
          clearCart();
          setValues(initialValues);
        });
    }
  };
  const handleRemove = (id) => removeFromCart(id);

  if (items.length) {
    return (
      <>
        <div className="mt-4 d-flex justify-content-center">
          <h1>Cart</h1>
        </div>

        <div className="cartItem mt-4 d-flex justify-content-center">
          {items.map((item) => (
            <ul key={item.title}>
              <img src={item.picURL} alt={item.title} />
              <li>{item.title}</li>
              <li>Cantidad: {item.quantity}</li>
              <li>${item.price}</li>
              <li
                className="removeItemX"
                style={{ cursor: "pointer" }}
                onClick={() => handleRemove(item.id)}
              >
                X
              </li>
            </ul>
          ))}
        </div>
        <div className="cartDivTotal">Total: ${total()}</div>
        <div className="cartLimp">
          <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
        <form>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <label>Celular</label>
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <div className="divSubBtn">
            <button className="submitBtn" type="button" onClick={handleSubmit}>
              Terminar Compra
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <div className="noProductCart">
        <h2>Aún no hay productos en el carrito</h2>
        <Link to="/">
          <button>Volver al Inicio</button>
        </Link>
      </div>
    );
  }
};
