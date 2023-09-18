import { Link } from "react-router-dom";
import { useLogIn } from "../../context/LogInContext";
import classes from "./ProfileWidget.module.css";

export const ProfileWidget = () => {
  const { logged, userName, userPhoto } = useLogIn();

  return logged ? (
    <div className={classes.profileWidgetContainer}>
      <Link to='/profile'>
      <img
        src={userPhoto}
        alt={`${userName} foto`}
        className={classes.profileImg}
      />
      </Link>
      {userName && <p>{userName}</p>}
    </div>
  ) : (
    <>
    <div className={classes.profileWidgetContainerNoLogged}>
      <Link to='/login'><img src="https://res.cloudinary.com/dmiy7cyjx/image/upload/v1695000251/CursoReact/profileDefault_uffvnj.png" alt="" className={classes.profileImgNoLoged} /></Link>
      </div>
    </>
  );
};
