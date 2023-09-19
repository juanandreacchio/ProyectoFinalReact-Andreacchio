import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useLogIn } from "../../context/LogInContext";
import { Order } from "../Order/Order";
import classes from './OrderListContainer.module.css'
import { useMode } from "../../context/ModeContext"
import { Link } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { useEffect } from "react";

export const OrderListContainer = () => {
  const { logged, userEmail } = useLogIn();

  const { mode } = useMode();
  const [loading, setLoading] = useState(true);
  

  const [ordenesDelUsuario, setOrdenesDelUsuario] = useState([]);

  const productsRef = query(
    collection(db, "orders"),
    where("buyer.email", "==", userEmail)
  );

  logged && useEffect(() => {
    setLoading(true)
    getDocs(productsRef).then((querySnapshot) => {
      const ordenes = querySnapshot.docs.map((doc) => {
        const fields = doc.data();
        return { id: doc.id, ...fields };
      });
      setOrdenesDelUsuario(ordenes);
    })      .catch((error) => {
      console.error(error);
    }).finally(() =>{
      setLoading(false);
    })
  }, [])

  !logged && useEffect(() =>{
    setLoading(false)
  })


  



  return (
    !loading ? (
      <div className={mode === 'light' ? `${classes.orderListContainer}` : `${classes.orderListContainer} ${classes.orderListContainerDM}`}  >
        <h1 className={logged ? `${classes.orderHistoryTitle}` : `${classes.none}`}>Historial de Ordenes</h1>
        {logged ? (
          ordenesDelUsuario.map((orden) => {
            return <Order {...orden} key={orden.id} />;
          })
        ) : (
          
          <p className={classes.noLoggedText}>No estas logeado. <Link to='/login'>Inicia sesión</Link> para consultar tu historial de órdenes</p>
        )}
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
    )
  );
      }
