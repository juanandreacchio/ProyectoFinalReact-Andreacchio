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
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.i18n";
import { useMode } from "../../context/ModeContext";
import Swal from "sweetalert2";
import { useLogIn } from "../../context/LogInContext";
import { CheckoutItem } from "../CheckoutItem/CheckoutItem";

export const Checkout = () => {
  const { cart, totalPrice, cleanCart } = useCart();
  const db = getFirestore();
  const { mode } = useMode();
  const { logged, userName, userEmail } = useLogIn();


  const createOrder = async (name, phone, mail) => {
    const objOrder = {
      buyer: {
        name: name,
        phone: phone,
        email: mail,
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

      mostrarAlerta(orderId);
      batch.commit();
      cleanCart();
    }
  };

  

  const mostrarAlerta = (orderId) => {
    mode === "light"
      ? Swal.fire({
          icon: "success",
          title: `Compra realizada! El id de tu compra es ${orderId}`,
        })
      : Swal.fire({
          icon: "success",
          title: `Compra realizada! El id de tu compra es ${orderId}`,
          customClass: {
            container: "dark-theme-alert",
          },
          background: "#010409",
          color: "white",
        });
  };

  return !logged ? (
    <div
      className={
        mode === "light"
          ? `${classes.checkoutContainer}`
          : `${classes.checkoutContainer} ${classes.checkoutContainerDM}`
      }
    >
      <h1 className={classes.checkoutTitle}>Checkout</h1>
      <div className={classes.formAndResume}>
        <div className={mode === 'light' ? `${classes.orderResume}` : `${classes.orderResume} ${classes.orderResumeDM}`}>
          <h2 className={classes.orderResumeTitle}>Resumen</h2>
          {cart.map(prod =>{
            return <CheckoutItem {...prod} />
          })}
          <h3 className={classes.orderResumeTotal}>Precio total: ${totalPrice}</h3>
        </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          expiringDate: "",
          cvv: "",
          floor: "",
          addres: "",
          cardNumber: "",
          emailVerification: ""
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
          if (!values.addres) {
            errors.addres = "Requerido";
          }
          if (!values.cardNumber) {
            errors.cardNumber = "Requerido";
          } else if (values.cardNumber.length < 16) {
            errors.cardNumber = "Número de tarjeta inválido";
          }
          if (!values.expiringDate) {
            errors.expiringDate = "Requerido";
          }
          if (!values.cvv) {
            errors.cvv = "Requerido";
          }
          if (!values.phone) {
            errors.phone = "Requerido";
          } else if (values.phone.length < 10) {
            errors.phone = "Número de teléfono inválido";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            createOrder(values.name, values.phone, values.email);
            values.phone = ""
            values.name = ""
            values.email = ""
            values.emailVerification = ""
            values.addres = ""
            values.cardNumber = ""
            values.floor = ""
            values.cvv = ""
            values.expiringDate = ""
            setSubmitting(false);
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
              {" "}
              {/* Nombre y Apellido */}
              <div>
                <label htmlFor="name">Nombre y Apellido</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={classes.inputForm}
                  placeholder="John Doe"
                />
                <p className={classes.errorMsg}>
                  {errors.name && touched.name && errors.name}
                </p>
              </div>
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
                <p className={classes.errorMsg}>
                  {errors.phone && touched.phone && errors.phone}
                </p>
              </div>
            </div>
            <div className={classes.formGroup}>
              {" "}
              {/* Email y Teléfono */}
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
                <p className={classes.errorMsg}>
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div>
                <label htmlFor="emailVerification">Verificación de email</label>
                <input
                  type="email"
                  name="emailVerification"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emailVerification}
                  className={classes.inputForm}
                  placeholder="email@email.com"
                />
                <p className={classes.errorMsg}>
                  {errors.emailVerification &&
                    touched.emailVerification &&
                    errors.emailVerification}
                </p>
              </div>
            </div>
            <div className={classes.formGroup}>
              {" "}
              {/* Dirección y Piso */}
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
                <p className={classes.errorMsg}>
                  {errors.addres && touched.addres && errors.addres}
                </p>
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
              {" "}
              {/* Número de tarjeta */}
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
              <p className={classes.errorMsg}>
                {errors.cardNumber && touched.cardNumber && errors.cardNumber}
              </p>
            </div>
            <div className={classes.formGroup}>
              {" "}
              {/* Expiring y CVV */}
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
                <p className={classes.errorMsg}>
                  {errors.expiringDate &&
                    touched.expiringDate &&
                    errors.expiringDate}
                </p>
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
                <p className={classes.errorMsg}>
                  {errors.cvv && touched.cvv && errors.cvv}
                </p>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.submitBtn}
            >
              Confirmar compra
            </button>
          </form>
        )}
      </Formik>
      </div>
    </div>
  ) : (
    <div
      className={
        mode === "light"
          ? `${classes.checkoutContainer}`
          : `${classes.checkoutContainer} ${classes.checkoutContainerDM}`
      }
    >
      <h1 className={classes.checkoutTitle}>Checkout</h1>
      <Formik
        initialValues={{
          phone: "",
          expiringDate: "",
          cvv: "",
          floor: "",
          addres: "",
          cardNumber: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.addres) {
            errors.addres = "Requerido";
          }
          if (!values.cardNumber) {
            errors.cardNumber = "Requerido";
          } else if (values.cardNumber.length < 16) {
            errors.cardNumber = "Número de tarjeta inválido";
          }
          if (!values.expiringDate) {
            errors.expiringDate = "Requerido";
          }
          if (!values.cvv) {
            errors.cvv = "Requerido";
          }
          if (!values.phone) {
            errors.phone = "Requerido";
          } else if (values.phone.length < 10) {
            errors.phone = "Número de teléfono inválido";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          createOrder(userName, values.phone, userEmail);
          values.phone = ""
          values.expiringDate = ""
          values.cvv = ""
          values.floor = ""
          values.addres = ""
          values.cardNumber = ""
          setSubmitting(false);
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
              {/* Nombre y Apellido */}
              <div>
                <label htmlFor="name">Nombre y apellido</label>
                {userName ? (
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={classes.inputForm}
                    placeholder={userName}
                    disabled
                  />
                ) : (
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={userName}
                    className={classes.inputForm}
                    placeholder="John Doe"
                  />
                )}
              </div>
            </div>
            <div className={classes.formGroup}>
              {" "}
              {/* Email y Teléfono */}
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
                <p className={classes.errorMsg}>
                  {errors.phone && touched.phone && errors.phone}
                </p>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={userEmail}
                  className={classes.inputForm}
                  placeholder={userEmail}
                  disabled
                />
              </div>
            </div>
            <div className={classes.formGroup}>
              {" "}
              {/* Dirección y Piso */}
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
                <p className={classes.errorMsg}>
                  {errors.addres && touched.addres && errors.addres}
                </p>
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
              {" "}
              {/* Número de tarjeta */}
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
              <p className={classes.errorMsg}>
                {errors.cardNumber && touched.cardNumber && errors.cardNumber}
              </p>
            </div>
            <div className={classes.formGroup}>
              {" "}
              {/* Expiring y CVV */}
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
                <p className={classes.errorMsg}>
                  {errors.expiringDate &&
                    touched.expiringDate &&
                    errors.expiringDate}
                </p>
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
                <p className={classes.errorMsg}>
                  {errors.cvv && touched.cvv && errors.cvv}
                </p>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.submitBtn}
            >
              Confirmar compra
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
