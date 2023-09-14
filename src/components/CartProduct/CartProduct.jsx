import { useCart } from "../../context/CartContext";
import classes from "./CartProduct.module.css";
import trash from './assets/trash.svg'
import { useMode } from '../../context/ModeContext'


export const CartProduct = ({ id, title, price, quantity, img }) => {
  const { removeItem } = useCart();

  const { mode } = useMode();

  return (
    <div className={ mode === 'light' ? `${classes.cartProdContainer}` : `${classes.cartProdContainer} ${classes.cartProdContainerDM}`}>
      <div className={classes.cartProdLeft}>
        <picture>
          <img src={img} alt={title} className={classes.cartProductIMG} />
        </picture>
        <p>{title}</p>
      </div>
      <p>${price}</p>
      <p>{quantity}</p>
      <p className={classes.deleteAndSubtotal}>${(price * quantity).toFixed(2)}</p>
      <button className={classes.deleteBtn} onClick={() => removeItem(id)}><img src={trash} alt="" /></button>
    </div>
  );
};
