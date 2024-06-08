import React from 'react'
import './Cart.css'
import Button from '../Button/Button'

function Cart({ cartItems, onCheckout }) {
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
    return (
        <div className='cart__container'>
            {cartItems.length === 0 ? "No items in cart" : ""}
            <br />
            <span className=''>Total Price: ${totalPrice.toFixed(2)}</span>
            <Button label={cartItems.length === 0 ? "Order !" : "Checkout"} onClick={onCheckout}
                buttonType={'checkout'} disabled={cartItems.length === 0 ? true : false} />
        </div>
    )
}

export default Cart