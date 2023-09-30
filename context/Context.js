"use client"
import { createContext, useContext, useState } from "react"

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const isPresent = cart.find((item) => item.id === product.id);
        console.log(isPresent);
        if (isPresent) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(newCart);
        }
        else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    const removeSingleItem = (id) => {
        const isPresent = cart.find((item) => item.id === id);
        if (isPresent.quantity === 1) {
            removeFromCart(id);
        }
        else {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            setCart(newCart);
        }
    }

    return (
        <Context.Provider value={{cart, addToCart, removeFromCart, removeSingleItem}}>
            {children}
        </Context.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(Context);
}