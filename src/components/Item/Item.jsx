import { Link } from 'react-router-dom'
import classes from './Item.module.css'
import { useContext } from 'react'
import { MiContext } from '../../App'

export const Item = ({id, category, price, title, img, description,stock}) =>{

    const value = useContext(MiContext)

    return (
        <Link to={`/detail/${id}`} >
        <div className={`${classes.itemBox}`}>
            <div className={classes.prodImg}>
            {stock ? <img src={img} alt={title} /> : <div className={classes.noStockContainer}>
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