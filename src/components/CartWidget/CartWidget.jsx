import { useCart } from '../../context/CartContext'
import cart from './assets/cart.svg'
import classes from './CartWidget.module.css'

export const CartWidget = () =>{

    const { totalQuantity } = useCart()

    return(
        <div className={classes.cartWidget}>
            <img src={cart} alt="cart" className={classes.imgCart} />
            <span className={classes.numberCart}>{totalQuantity}</span>
        </div>
    )
}