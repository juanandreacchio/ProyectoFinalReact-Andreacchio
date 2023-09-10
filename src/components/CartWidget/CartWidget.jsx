import { useCart } from '../../context/CartContext'
import cart from './assets/cart.svg'
import classes from './CartWidget.module.css'
import cartDM from './assets/icons8-shopping-cart-48.png'
import { useMode } from '../../context/ModeContext'

export const CartWidget = () =>{

    const { totalQuantity } = useCart()
    const { mode } = useMode();

    return(
        <div className={mode === 'light' ? `${classes.cartWidget}` : `${classes.cartWidget} ${classes.dm}`}>
            <img src={mode === 'light' ? cart : cartDM} alt="cart" className={classes.imgCart} />
            <span className={classes.numberCart}>{totalQuantity}</span>
        </div>
    )
}