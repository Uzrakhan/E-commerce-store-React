import React from 'react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { CartProvider } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
    const { cartItems, calculateTotal, calculateSubtotal,increaseQuantity, decreaseQuantity, deleteFromCart, shippingFeePerItem, totalShippingFee } = useCart();

    
    return(
        <div className='cart-container'>
            <div>
                <div className='cart-part-left'>
                    <span>YOUR CART ----</span>
                </div>
            </div>
            {cartItems.length === 0 ? (
                <div>
                    <div className='cart-part-right'>
                        <span>CART TOTALS-----</span>
                        <p>Subtotal: 0.00</p>
                        <p>Shipping Fee: 0.00</p>
                        <p>Total: 0.00</p>
                    </div>
                </div>
            ) : (
                <div>
                    <div>
                            {cartItems.map((item) => (
                                <div 
                                key={item.id}
                                className='cart-item-container'
                                style={{display:'flex', flexDirection: 'row'}}
                                >
                                    <div className='cart-item-left-img-div'>
                                        <img src={item.image} alt={item.name} width='150px' height='150px'/>
                                    </div>
                                    <div className='cart-item-left-text'>
                                        <p>{item.name}</p>
                                        <p>₹{item.price} x {item.quantity}</p>
                                    </div>
                                    <div className='cart-item-right'>
                                        <button onClick={() => increaseQuantity(item.id)}>➕</button>
                                        <button onClick={() => decreaseQuantity(item.id)}>➖</button>
                                        <button onClick={() => deleteFromCart(item.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className='cart-part-right'>
                        <span>CART TOTALS-----</span>
                        <p>Subtotal: ₹{calculateSubtotal()}</p>
                        <p>Shipping Fee: ₹{shippingFeePerItem}</p>
                        <p><strong>Total: ₹{calculateTotal()}</strong></p>
                        <Link to='/place-order'>
                            <button>Proceed To Checkout</button>
                        </Link>
                    </div>
                </div>
            )
        }
        </div>
    )
};

export default Cart;