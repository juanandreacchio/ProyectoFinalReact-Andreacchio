import { Link } from "react-router-dom"
import classes from './NotFound.module.css'
import { useMode } from "../../context/ModeContext"

export const NotFound = () =>{

    const { mode } = useMode()

    return(
        <div className={mode === 'light' ? `${classes.notFoundContainer}` : `${classes.notFoundContainer} ${classes.notFoundContainerDM}`}>
            <h1>Página no encontrada</h1>
            <Link to='/'>Volver al inicio</Link>
        </div>
    )
} 