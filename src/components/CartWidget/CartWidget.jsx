import cart from './assets/cart.svg'
import classes from './CartWidget.module.css'

export const CartWidget = () =>{
    return(
        <div className={classes.cartWidget}>
            <img src={cart} alt="cart" className={classes.imgCart} />
            <span className={classes.numberCart}>0</span>
        </div>
    )
}