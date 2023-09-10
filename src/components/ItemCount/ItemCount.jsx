import { useMode } from "../../context/ModeContext"
import { useState } from "react"
import classes from './ItemCount.module.css'

export const ItemCount = ({ stock, initial, onAdd, }) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        quantity < stock && setQuantity(quantity + 1);
    }
    const decrement = () => {
        quantity > 1 && setQuantity(quantity - 1);
    }

    const { mode } = useMode();

    if (stock > 0) {
        return (
            <div className={mode === 'dark' && `${classes.countContainerDM}` || ''}>
            <div className={classes.itemCountContainer}>
                <button onClick={decrement} className={classes.addDecBtn}>-</button>
                <span>{quantity}</span>
                <button onClick={increment} className={classes.addDecBtn}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} className={classes.addCartBtn} disabled={!stock}>Añadir al carrito</button>
            </div>
            </div>
        )
    }
}