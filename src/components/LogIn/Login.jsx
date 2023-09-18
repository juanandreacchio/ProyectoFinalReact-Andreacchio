import { useLogIn } from "../../context/LogInContext";
import { Formik } from "formik";
import classes from "./Login.module.css";
import { Link } from 'react-router-dom'

export const Login = () => {
  const { logged, loginGoogle, login, userName } = useLogIn();

  return (
    !logged ? (
    <div className={classes.loginContainer}>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          login(values.email, values.password);
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
            <div>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={classes.inputLogin}
                placeholder="Ingrese su correo electrónico"
              />
              <p className={classes.errorMsg}>
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div className={classes.loginInputContainer}>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={classes.inputLogin}
                placeholder="Ingrese su contraseña"
              />
              <p className={classes.errorMsg}>
                {errors.password && touched.password && errors.password}
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.loginBtn}
            >
              Iniciar Sesión
            </button>
          </form>
        )}
      </Formik>
      <div className={classes.loginContainerGoogle}>
        <picture className={classes.pictureGoogleIcon}>
      <img src="https://res.cloudinary.com/dmiy7cyjx/image/upload/v1695037223/CursoReact/Google_Icons-09-512_eedsuw.webp" alt="" className={classes.googleIcon} />
      </picture>
      <button onClick={loginGoogle} className={classes.googleLogin}> Iniciar Sesión con Google</button>
      </div>
    </div>
    ) : (
      <div>
      {userName ? <h1>Bienvenido/a {userName}</h1> : <h1>Bienvenido/a!</h1>}
      < Link to='/'>Ver productos</Link>
      </div>
    )
  );
};
