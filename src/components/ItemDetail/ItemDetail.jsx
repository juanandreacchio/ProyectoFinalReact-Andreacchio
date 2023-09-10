
import { useContext } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import classes from './ItemDetail.module.css'
import { CartContext, useCart } from "../../context/CartContext"
import { useMode } from "../../context/ModeContext"

export const ItemDetail = ({ id, category, price, title, img, description, stock }) => {

    const handleOnAdd = (quantity) =>{
        const objProductToAdd = {
            id, title, price, quantity
        }
        addItem(objProductToAdd);
        console.log(`Agregaste ${quantity} productos`);
    }

    const { addItem } = useCart()

    const { mode } = useMode()

    return (
        <div className={mode === 'light' ? `${classes.detailContainer}` : `${classes.detailContainer} ${classes.detailDM}`}>
            <picture className={classes.detailLeft}>
            <img src={img} alt={title} />
            </picture>
            <div className={classes.detailRight}>
                <div>
                <h1 className={classes.detailTitle}>{title}</h1>
                <p className={classes.detailCategory}>Category: {category}</p>
                <p className={classes.detailDescription}>{description}</p>
                </div>
                <div>
                <p className={classes.detailPrice}>${price}</p>
                {stock ? < ItemCount stock={stock} initial={1} onAdd={quantity => handleOnAdd(quantity) } /> : <p>Producto sin stock online</p>}
                </div>
            </div>
        </div>
    )

}