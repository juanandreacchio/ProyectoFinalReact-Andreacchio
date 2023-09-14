import { useCart } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartProduct";

export const CartList = () => {
  const { cart, totalQuantity } = useCart();

  return (
    <div>
      {cart.map((producto) => {
        return <CartItem {...producto} key={producto.id} />;
      })}
    </div>
  );
};
