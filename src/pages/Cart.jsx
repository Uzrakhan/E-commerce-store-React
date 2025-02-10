import React from 'react';
import { useCart } from '../context/CartContext';
import { CartProvider } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
    const { cartItems, calculateTotal, calculateSubtotal,increaseQuantity, decreaseQuantity, deleteFromCart, shippingFeePerItem, totalShippingFee } = useCart();

    
    return(
        <div>
            <h1>CART</h1>
            {cartItems.length === 0 ? (
                <p>Your Cart is empty.</p>
            ) : (
                <div>
                    <h1>Cart Items</h1>
                    <ul>
                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <li key={item.id}>
                                    {item.name} - ₹{item.price} x {item.quantity}
                                </li>
                                <button onClick={() => increaseQuantity(item.id)}>➕</button>
                                <button onClick={() => decreaseQuantity(item.id)}>➖</button>
                                <button onClick={() => deleteFromCart(item.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        ))}
                    </ul>
                    <p>Subtotal: ₹{calculateSubtotal()}</p>
                    <p>Shipping Fee: ₹{shippingFeePerItem}</p>
                    <h3>Total: ₹{calculateTotal()}</h3>
                </div>
            )
        }
        </div>
    )
};

export default Cart;