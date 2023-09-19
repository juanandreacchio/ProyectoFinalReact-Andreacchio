import { Link } from "react-router-dom";
import { useLogIn } from "../../context/LogInContext";
import classes from "./Profile.module.css";
import { useMode } from "../../context/ModeContext";

export const Profile = () => {
  const { logged, userName, userEmail, logout, userPhoto } = useLogIn();
  const { mode } = useMode();


  return logged ? (
    <div
      className={
        mode === "light"
          ? `${classes.profileContainer}`
          : `${classes.profileContainer} ${classes.profileContainerDM}`
      }
    >
      <h1 className={classes.profileTitle}>Mi perfil</h1>
      <img src={userPhoto} alt={`${userName} profile photo`} />
      <div>
        <p className={classes.profileHeader}>Nombre y Apellido</p>
        <input
          type="text"
          disabled
          placeholder={userName}
          className={classes.inputProfile}
        />
      </div>
      <div>
        <p className={classes.profileHeader}>Email</p>
        <input
          type="text"
          disabled
          placeholder={userEmail}
          className={classes.inputProfile}
        />
      </div>
      <button className={classes.logOutBtn} onClick={logout}>
        Cerrar sesión
      </button>
      <Link to='/orders' className={classes.ordersBtn}>Ordenes</Link>
    </div>
  ) : (
    <div
      className={
        mode === "light"
          ? `${classes.profileContainer}`
          : `${classes.profileContainer} ${classes.profileContainerDM}`
      }
    >
      <h1>No estas logeado!</h1>
      <Link to="/login">Iniciar sesión</Link>
      <Link to="/register">Registrarse</Link>
    </div>
  );
};
