import React, {createContext, useContext, useState} from 'react';
import products from '../products';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([]);
    const shippingFeePerItem = 10;
    const totalShippingFee = shippingFeePerItem * cartItems.length;

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);

        if(existingItem) {
            setCartItems((prevItems) => prevItems.map((item) => item.id === product.id ? 
            {...item,quantity: item.quantity + 1} : item
        ))
        }else{
            setCartItems((prevItems) => [...prevItems,{...product, quantity: 1}]);
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((subtotal,item) => subtotal + item.price * item.quantity,0).toFixed(2)
    }
    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const totalShippingFee = shippingFeePerItem * cartItems.length;
        return (subtotal + totalShippingFee).toFixed(2);
    };

    

    const increaseQuantity = (id) => {
        setCartItems((prevItems) => prevItems.map((item) => item.id === id ?
        {...item,quantity: item.quantity + 1} : item
        ))
    };

    const decreaseQuantity = (id) => {
        setCartItems((prevItems) => prevItems.map((item) => 
            item.id === id && item.quantity > 1 ? 
            {...item,quantity: item.quantity - 1} : item
        ))
    };

    const deleteFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return(
        <CartContext.Provider value={{cartItems, addToCart, calculateTotal, calculateSubtotal,increaseQuantity, decreaseQuantity, deleteFromCart, shippingFeePerItem}}>
            {children}
        </CartContext.Provider>
    )
}