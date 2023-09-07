import { Link } from 'react-router-dom'
import classes from './Item.module.css'

export const Item = ({id, category, price, title, img, description,stock}) =>{
    return (
        <Link to={`/detail/${id}`} >
        <div className={`${classes.itemBox}`}>
            <div className={classes.prodImg}>
            <img src={img} alt={title} />
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