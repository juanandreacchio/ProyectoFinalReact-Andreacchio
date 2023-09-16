import classes from "./Checkout.module.css";
import { useCart } from "../../context/CartContext";
import {
  collection,
  getFirestore,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { Formik } from "formik";
import { useState } from "react";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.i18n";

export const Checkout = () => {
  const { cart, totalPrice } = useCart();
  const db = getFirestore();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const createOrder = async () => {
    const objOrder = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      items: cart,
      total: totalPrice,
    };

    const batch = writeBatch(db);
    const outOfStock = [];

    const ids = cart.map((prod) => prod.id);
    const productsRef = query(
      collection(db, "productos"),
      where(documentId(), "in", ids)
    );

    const { docs } = await getDocs(productsRef);

    docs.forEach((doc) => {
      const fields = doc.data();
      const stockDisponible = fields.stock;

      const productAddedToCart = cart.find((prod) => prod.id === doc.id);
      const productQuantity = productAddedToCart?.quantity;

      if (stockDisponible >= productQuantity) {
        batch.update(doc.ref, { stock: stockDisponible - productQuantity });
      } else {
        outOfStock.push({ id: doc.id, ...fields });
      }
    });

    if (outOfStock.length === 0) {
      const orderRef = collection(db, "orders");
      const { id: orderId } = await addDoc(orderRef, objOrder);

      batch.commit();

      console.log("Compra Realizada! " + orderId);
    }
  };

  return (
    <div>
      <div className={classes.checkoutContainer}>
        <h1 className={classes.checkoutTitle}>Checkout</h1>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            phone: "",
            expiringDate: "",
            cvv: "",
            floor: "",
            addres: "",
            cardNumber: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Requerido";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email inválido";
            }
            if (!values.name) {
              errors.name = "Requerido";
            }
            if (!values.surname) {
              errors.surname = "Requerido";
            }
            if (!values.addres) {
              errors.addres = "Requerido";
            }
            if (!values.cardNumber) {
              errors.cardNumber = "Requerido";
            } else if (values.cardNumber.length < 16) {
              errors.cardNumber = "Número de tarjeta inválido";
            }
            if (!values.expiringDate){
              errors.expiringDate = "Requerido"
            }
            if (!values.cvv){
              errors.cvv = "Requerido"
            }
            if (!values.phone) {
              errors.phone = "Requerido";
            } else if (values.phone.length < 10) {
              errors.phone = "Número de teléfono inválido";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              setName(values.name);
              setPhone(values.phone);
              setEmail(values.email);
              values.name = "";
              values.email = "";
              values.phone = "";
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.formGroup}>
                <div>
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={classes.inputForm}
                    placeholder="John"
                  />
                  {errors.name && touched.name && errors.name}
                </div>
                <div>
                  <label htmlFor="surname">Apellido</label>
                  <input
                    type="text"
                    name="surname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                    className={classes.inputForm}
                    placeholder="Doe"
                  />
                  {errors.surname && touched.surname && errors.surname}
                </div>
              </div>
              <div className={classes.formGroup}>
                <div>
                  <label htmlFor="phone">Teléfono</label>
                  <Cleave
                    placeholder="11 1234 5678"
                    options={{ phone: true, phoneRegionCode: "AR" }}
                    className={classes.inputForm}
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone && errors.phone}
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={classes.inputForm}
                    placeholder="email@email.com"
                  />
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
              <div className={classes.formGroup}>
                <div>
                  <label htmlFor="addres">Dirección</label>
                  <input
                    type="text"
                    name="addres"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.addres}
                    className={classes.inputForm}
                    placeholder="Calle 123"
                  />
                  {errors.addres && touched.addres && errors.addres}
                </div>
                <div>
                  <label htmlFor="floor">Piso (Opcional)</label>
                  <input
                    type="text"
                    name="floor"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.floor}
                    className={classes.inputForm}
                    placeholder="5 A"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cardNumber">Número de tarjeta</label>
                <Cleave
                  className={`${classes.inputForm} ${classes.inputCard}`}
                  placeholder="1234 5678 90123 4567"
                  options={{ creditCard: true }}
                  name="cardNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cardNumber}
                />
                {errors.cardNumber && touched.cardNumber && errors.cardNumber}
              </div>
              <div className={classes.formGroup}>
                <div>
                  <label htmlFor="expiringDate">Fecha de vencimiento</label>
                  <Cleave
                    placeholder="MM/YY"
                    options={{ date: true, datePattern: ["m", "y"] }}
                    className={classes.inputForm}
                    name="expiringDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expiringDate}
                  />
                  {errors.expiringDate && touched.expiringDate && errors.expiringDate}
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <Cleave
                    placeholder="123"
                    options={{ blocks: [4], uppercase: "true" }}
                    className={classes.inputForm}
                    name="cvv"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cvv}
                  />
                  {errors.cvv && touched.cvv && errors.cvv}
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={classes.submitBtn}
                onClick={createOrder}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
