import { Link } from 'react-router-dom'
import classes from './Item.module.css'
import { useMode } from '../../context/ModeContext'

export const Item = ({id, price, title, img, stock}) =>{


    const { mode } = useMode();

    return (
        <Link to={`/detail/${id}`} >
        <div className={mode === 'light' ? `${classes.itemBox}` : `${classes.itemBox} ${classes.dm}`}>
            <div className={classes.prodImg}>
            {stock ? <img src={img} alt={title} className={classes.itemIMG} /> : <div className={classes.noStockContainer}>
                <img src={img} alt={title} className={classes.noStockImg} />
                <p className={classes.noStockText}>Sin stock</p>
            </div> }
            </div>
            <div className={classes.itemBottom}>
            <h3 className={classes.productTitle}>{title}</h3>
            <p className={classes.price}>${price}</p>
            <span className={classes.stock}>Stock disponible: {stock}</span>
            < button className={classes.detailBtn} >Ver Detalle</button>
            </div>
        </div>
        </Link>
    )
}