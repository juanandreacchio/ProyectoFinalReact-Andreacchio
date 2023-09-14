import { useCart } from "../../context/CartContext";
import { CartProduct } from "../CartProduct/CartProduct";

export const CartList = () => {
  const { cart, totalQuantity } = useCart();

  return (
    <div>
      {cart.map((producto) => {
        return <CartProduct {...producto} key={producto.id} />;
      })}
    </div>
  );
};
