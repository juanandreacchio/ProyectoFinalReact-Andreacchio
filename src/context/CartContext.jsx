import { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    console.log(cart);

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        }
        else {
            console.log('Esta en el carrito');
        }
    }


    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0
    
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        });
    
        return totalQuantity;
    }
    
    const totalQuantity = getTotalQuantity();

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}

