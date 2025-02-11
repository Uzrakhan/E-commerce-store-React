import React, { useState } from 'react';
import { useCart } from '../context/CartContext';


const PlaceOrder = () => {
        const { cartItems, calculateTotal, calculateSubtotal, deleteFromCart, shippingFeePerItem, totalShippingFee } = useCart();
        const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
        
        const handlePlaceOrder = (e) => {
            e.preventDefault();
            if(!selectedPaymentMethod) {
                alert("Please select a payment method.");
                return;
            }

            if(selectedPaymentMethod === 'gPay') {
                window.location.href = 'upi://pay?pa=your-vpa@okaxis&pn=YourName&mc=0000&tid=1234567890&tr=1234567890&tn=Payment&am=1.00&cu=INR&url=https://yourwebsite.com';
            } else if(selectedPaymentMethod === 'paytm') {
                window.location.href = 'https://paytm.com/'
            } else if(selectedPaymentMethod === 'cod'){
                alert('COD method selected');
            }
        }

    return(
        <form>
            <div className='form-left'>
                <h3>DELIVERY INFORMATION ----</h3>
                <div className='names'>
                    <input placeholder='First Name'/>
                    <input placeholder='Last Name'/>
                </div>
                <div className='email'>
                    <input placeholder='email address'/>
                </div>
                <div className='street'>
                    <input placeholder='street'/>
                </div>
                <div className='area'>
                    <input placeholder='City'/>
                    <input placeholder='State'/>
                    <input placeholder='Zipcode'/>
                    <input placeholder='Country'/>
                </div>
                <div>
                    <input placeholder='Phone'/>
                </div>
            </div>

            <div className='form-right'>
                <h3>CART TOTALS ----</h3>
                <div className='totals'>
                    <p>Subtotal: ₹{calculateSubtotal()}</p>
                    <p>Shipping Fee: ₹{shippingFeePerItem}</p>
                    <p><strong>Total: ₹{calculateTotal()}</strong></p>
                </div>
                <div>
                    <h3>PAYMENT METHOD</h3>
                    <div>
                        <label>
                            <input 
                             type='radio'
                             name='payment-method'
                             value='gPay'
                             onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                            />
                            <img 
                            width='60px'
                            src='https://animationvisarts.com/wp-content/uploads/2023/11/Frame-43-1.png'/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                             type='radio'
                             name='payment-method'
                             value='paytm'
                             onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                            />
                            <img 
                            width='50px'
                            alt="GPay"
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEjY90pS-UfgHJU4glc8Aiupp1xCn_jcvRQ&s'
                            />
                        </label>
                    </div>
                    <div style={{display: 'flex',}}>
                        <input 
                        type='radio'
                        name='payment-method'
                        value='cod'
                        />
                        <p>CASH ON DELIVERY</p>
                    </div>
                    <button 
                    style={{padding: '1vw 2vw',backgroundColor: 'black',color: 'white', borderRadius: '8px'}}
                    onClick={handlePlaceOrder}>
                        PLACE ORDER
                    </button>
                </div>
            </div>
        </form>
    )
};

export default PlaceOrder;