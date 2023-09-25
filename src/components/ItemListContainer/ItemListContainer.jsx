import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import classes from "./ItemListContainer.module.css";
import { Link, useParams } from "react-router-dom";
import { useMode } from "../../context/ModeContext";
import { SpinnerCircular } from "spinners-react";
import { getProducts } from "../../services/firebase/firestore/products";

export const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((products) => {
        setProductos(products);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  const { mode } = useMode();

  return productos.length > 0 ? (
    <div
      className={
        (mode === "dark" && `${classes.itemListDm} ${classes.itemList}`) ||
        `${classes.itemList}`
      }
    >
      <h2 className={classes.greetingMsg}>{props.greeting}</h2>
      {!loading ? (
        <ItemList products={productos} />
      ) : (
        <SpinnerCircular
          size="20%"
          color="black"
          style={{
            width: "100%",
            margin: "0 auto",
            height: "200px",
            marginTop: "50px",
          }}
        />
      )}
    </div>
  ) : (
    <div>
      {!loading ? (
        <div className={mode === 'light' ? `${classes.noCategoryContainer}` : `${classes.noCategoryContainer} ${classes.noCategoryContainerDM}`}>
          <h1>Lo sentimos! No hay productos de esta categoría</h1>
          <Link to="/">Volver al inicio</Link>
        </div>
      ) : (
        <SpinnerCircular
          size="20%"
          color="black"
          style={{
            width: "100%",
            margin: "0 auto",
            height: "200px",
            marginTop: "50px",
          }}
        />
      )}
    </div>
  );
};
