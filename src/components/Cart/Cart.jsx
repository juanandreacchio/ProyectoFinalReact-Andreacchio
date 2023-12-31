import classes from './Cart.module.css'
import { CartList } from "../CartList/CartList"
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useMode } from '../../context/ModeContext'

export const Cart = () => {

    const { totalPrice, cleanCart, totalQuantity } = useCart()

    const { mode } = useMode()

    return (
        totalQuantity > 0 ? (
        <>
          <div className={mode === 'light' ? `${classes.cartContainer}` : `${classes.cartContainer} ${classes.cartContainerDM}`}>
            <div className={classes.cartHeaders}>
              <p>Producto</p>
              <p>Precio</p>
              <p>Cantidad</p>
              <p>Subtotal</p>
              <p></p>
            </div>
            <CartList />
            <div className={classes.cartContainerBottom}>
            <p className={classes.totalPrice}>Total: ${totalPrice.toFixed(2)}</p>
            <div className={classes.actionBtns}>
              <button onClick={cleanCart} className={classes.actionBtn}>Vaciar carrito</button>
              <Link to='/checkout' className={classes.actionBtn}>Comprar</Link>
            </div>
          </div>
          </div>
        </> ) : (
            <div className={mode == 'light' ? `${classes.emptyCart}` : `${classes.emptyCart} ${classes.emptyCartDM}`}>
                <p>Carrito Vacío</p>
                <Link to='/' className={classes.emptyCartBtn}>Comprar aquí</Link>
            </div>
        )
      );
}