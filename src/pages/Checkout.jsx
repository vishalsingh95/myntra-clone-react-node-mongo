import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import Swal from 'sweetalert2';

const Checkout = () => {

    const navigate = useNavigate();
    const { cartItems } = useCart();
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce(
            (sum, item) => sum + (item.price * item.quantity), 
            0
        );
        setCartTotal(total);
    }, [cartItems]);

    const handleProceedToPayment = () => {
        Swal.fire({
            title: 'Proceed to Payment',
            text: 'You will be redirected to the payment gateway.',
            icon: 'info',
            confirmButtonText: 'OK'
        }).then(() => {
            Swal.fire({
                title: 'Redirecting...',
                icon: 'success'
            });

            navigate('/'); // redirect wherever needed
        });
    };

    const handleCancel = () => {
        Swal.fire({
            title: 'Order Cancelled',
            icon: 'warning'
        });
    };

    return (
        <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
            <div style={{ padding: '20px' }}>
                <h1 className="text-2xl font-bold mb-4">Checkout</h1>

                <p className="text-gray-600 mb-2">
                    Review your order and proceed to payment.
                </p>

                <div className="mt-4 flex items-center">
                    <button
                        onClick={handleProceedToPayment}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Proceed to Payment
                    </button>

                    <button
                        onClick={handleCancel}
                        className="ml-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>

                    <p className="text-gray-600 ml-4">
                        Total Amount: {formatCurrency(cartTotal)}
                    </p>
                </div>

                <div className="mt-6">
                    <p className="text-gray-600">
                        Thank you for shopping with us!
                    </p>
                    <p className="text-gray-600">
                        If you have any questions, please contact our support team.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Note: This is a demo checkout page. Payment processing is not implemented.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;