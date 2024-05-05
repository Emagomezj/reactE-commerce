import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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
    const order = {
      buyer: values,
      items,
      total: total(),
    };
    const db = getFirestore();
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
  };
  const handleRemove = (id) => removeFromCart(id);

  return (
    <>
      <div className="mt-4 d-flex justify-content-center">
        <h1>Cart</h1>
      </div>

      <div className="mt-4 d-flex justify-content-center">
        {items.map((item) => (
          <ul key={item.title}>
            <li>{item.title}</li>
            <li>{item.quantity}</li>
            <li>{item.price}</li>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => handleRemove(item.id)}
            >
              X
            </li>
          </ul>
        ))}
      </div>
      <div>total: ${total()}</div>
      <button onClick={clearCart}>Limpiar Carrito</button>
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
        <button type="button" onClick={handleSubmit}>
          Terminar Compra
        </button>
      </form>
    </>
  );
};
