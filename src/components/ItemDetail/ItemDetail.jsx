
import { ItemCount } from "../ItemCount/ItemCount"
import classes from './ItemDetail.module.css'

export const ItemDetail = ({ id, category, price, title, img, description, stock }) => {


    return (
        <div className={classes.detailContainer}>
            <div className={classes.detailLeft}>
            <img src={img} alt={title} />
            </div>
            <div className={classes.detailRight}>
                <div>
                <h1 className={classes.detailTitle}>{title}</h1>
                <p className={classes.detailCategory}>Category: {category}</p>
                <p className={classes.detailDescription}>{description}</p>
                </div>
                <div>
                <p className={classes.detailPrice}>${price}</p>
                < ItemCount stock={stock} initial={1} onAdd={(quantity) => {
                    console.log(title, " ",price, " ",quantity );
                    console.log(`Cantidad agregada: ${quantity}`);
                } } />
                </div>
            </div>
        </div>
    )

}