import classes from './CartContainer.module.css'
import { CartList } from "../CartList/CartList"
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useMode } from '../../context/ModeContext'

export const CartContainer = () => {

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
            <p className={classes.totalPrice}>Total: ${totalPrice}</p>
            <div className={classes.actionBtns}>
              <button onClick={cleanCart} className={classes.actionBtn}>Vaciar carrito</button>
              <button className={classes.actionBtn}>Comprar</button>
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