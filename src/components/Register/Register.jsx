import { useLogIn } from "../../context/LogInContext";
import { Formik } from "formik";
import classes from "./Register.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMode } from "../../context/ModeContext"

export const Register = () => {
  const { register } = useLogIn();

  const { mode } = useMode()

  const mostrarToast = () => {
    toast.success("Usuario registrado correctamente!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className={mode === 'light' ? `${classes.registroContainer}` : `${classes.registroContainer} ${classes.registroContainerDM}`}>
      <h1>Registro</h1>
      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
        register(values.email, values.password, values.name);
          setSubmitting(false);
          mostrarToast();
          
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
            <div className={classes.registerInputContainer}>
              <label htmlFor="name">Nombre y Apellido</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={classes.inputRegister}
                placeholder="Ingrese su nombre y apellido"
              />
              <p className={classes.errorMsg}>
                {errors.name && touched.name && errors.name}
              </p>
            </div>
            <div className={classes.registerInputContainer}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={classes.inputRegister}
                placeholder="Ingrese su correo electrónico"
              />
              <p className={classes.errorMsg}>
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div className={classes.registerInputContainer}>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={classes.inputRegister}
                placeholder="Ingrese su contraseña"
              />
              <p className={classes.errorMsg}>
                {errors.password && touched.password && errors.password}
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.registerBtn}
            >
              Registrarse
            </button>
          </form>
        )}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};
