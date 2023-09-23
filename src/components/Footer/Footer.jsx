import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
import { useMode } from '../../context/ModeContext'




export const Footer = () =>{

    const { mode } = useMode()

    return (
        <footer className={mode === 'light' ? `${classes.footer}` : `${classes.footer} ${classes.footerDM}`}>
        <p className={classes.footerText}>Mis redes sociales</p>
        <div className={classes.footerSocialMediaContainer}>
        <Link to="https://www.linkedin.com/in/juan-cruz-andreacchio-55a343268/">
        <FontAwesomeIcon icon={faLinkedin} size='3x' className={classes.iconFooter} />
        </Link>
        <Link to="https://github.com/juanandreacchio">
        <FontAwesomeIcon icon={faGithub} size='3x' className={classes.iconFooter} />
        </Link>
        <Link to="https://www.instagram.com/juan_andreacchio/">
        <FontAwesomeIcon icon={faInstagram} size='3x' className={classes.iconFooter} />
        </Link>
        </div>
        </footer>
    )
}