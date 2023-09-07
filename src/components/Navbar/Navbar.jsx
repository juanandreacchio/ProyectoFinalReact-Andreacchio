import { NavLink, Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import classes from './Navbar.module.css'

export const Navbar = () =>{
    return(
        <nav>
            <Link to='/' className={classes.navTitle}>TElectronics</Link>
            <section>
                <ul>
                    <NavLink to='/category/Videojuegos' className={({ isActive }) => isActive? classes.navItemActive : classes.navItem }>Videojuegos</NavLink>
                    <NavLink to='/category/Audio' className={({ isActive }) => isActive? classes.navItemActive : classes.navItem }>Audio</NavLink>
                    <NavLink to='/category/Computacion' className={({ isActive }) => isActive? classes.navItemActive : classes.navItem }>Computación</NavLink>
                    <NavLink to='/category/Celulares' className={({ isActive }) => isActive? classes.navItemActive : classes.navItem }>Celulares</NavLink>
                </ul>
            </section>
            < CartWidget />
        </nav>
    )
}