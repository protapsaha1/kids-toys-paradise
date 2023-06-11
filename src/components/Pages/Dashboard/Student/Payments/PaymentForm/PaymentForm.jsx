import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
// import './PaymentFrom.css';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { err, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (err) {
            console.log(err)
            setError(err);
        }
        else {
            console.log('[paymentMethod]', paymentMethod)
            setError('');
        }
    };


    return (
        <>
            <form className="w-[1000px] mx-auto text-2xl" onSubmit={handlePayment}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-blue-800 px-4 py-3 rounded-xl hover:bg-blue-600 text-xl font-serif font-bold text-white mt-8" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {error && <p className="text-xl text-red-500 font-sans font-semibold">{error}</p>}
        </>
    );
};

export default PaymentForm;