import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import classes from "./ItemListContainer.module.css";
import { useParams } from "react-router-dom";
import { useMode } from "../../context/ModeContext";
import { SpinnerCircular } from "spinners-react";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = categoryId ? query(collection(db, "productos"), where('category','==',categoryId)) : collection(db, "productos");

    getDocs(productsRef)
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });

        setProductos(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [categoryId]);

  const { mode } = useMode();

  return (
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
  );
};
