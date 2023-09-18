import { Link } from "react-router-dom";
import { useLogIn } from "../../context/LogInContext";
import classes from "./ProfileWidget.module.css";
import { useMode } from "../../context/ModeContext"



export const ProfileWidget = () => {
  const { logged, userName, userPhoto } = useLogIn();

  const photoNoLoggedBlack = "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1695000251/CursoReact/profileDefault_uffvnj.png"
  const photoNoLoggedWhite = "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1695045086/CursoReact/Proyecto_nuevo_zt5nki.png"

  const { mode } = useMode()

  return logged ? (
    <div className={classes.profileWidgetContainer}>
      <Link to='/profile'>
      <img
        src={userPhoto}
        alt={`${userName} foto`}
        className={classes.profileImg}
      />
      </Link>
      {userName && <p className={mode === 'dark' && `${classes.userNameNavBarDM}` || ''}>{userName}</p>}

    </div>
  ) : (
    <>
    <div className={classes.profileWidgetContainerNoLogged}>
      <Link to='/login'><img src={mode === 'light' ? `${photoNoLoggedBlack}` : `${photoNoLoggedWhite}`} alt="" className={classes.profileImgNoLoged} /></Link>

      </div>
    </>
  );
};
