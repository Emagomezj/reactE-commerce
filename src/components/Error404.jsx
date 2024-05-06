import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="main404">
      <h1>Ups... Parece que la página no existe</h1>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default Error404;
