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
            const updatedCart = cart.map(prod =>{
                if (prod.id === productToAdd.id){
                    prod.quantity+= productToAdd.quantity
                }
                return prod;
            })
            setCart(updatedCart);
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

    const removeItem = (id) =>{
        const updatedCart = cart.filter(prod => prod.id != id)
        console.log(updatedCart);
        setCart(updatedCart)
    }

    const cleanCart = () =>{
        setCart([])
    }

    const getTotalPrice = () =>{
        let totalPrice = 0

        cart.forEach(prod => {
            let itemPrice = prod.price * prod.quantity
            totalPrice += itemPrice
        });

        return totalPrice;
    }

    const totalPrice = getTotalPrice();

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, totalPrice, removeItem, cleanCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}

