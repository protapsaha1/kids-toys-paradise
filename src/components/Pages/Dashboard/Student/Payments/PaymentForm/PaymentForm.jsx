import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosHook from "../../../../../CustomHook/useAxiosHook";
import useHookContext from "../../../../../CustomHook/useHookContext";
// import './PaymentFrom.css';

const PaymentForm = ({ price }) => {
    const { axiosProtect } = useAxiosHook();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useHookContext();
    const elements = useElements();
    const stripe = useStripe();

    console.log(price)


    useEffect(() => {
        axiosProtect.post('/payment', { price })
            .then(data => {
                console.log(data.data.clientSecret)
                setClientSecret(data.data.clientSecret)
            })
    }, [])






    const handlePayment = async (e) => {
        e.preventDefault();
        console.log(stripe)
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


        const { paymentIntent, error: confirmErr } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'unknown'
                },
            },
        });
        if (confirmErr) {
            console.log(confirmErr);
            // setError(confirmErr)
        }
        console.log(paymentIntent)
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
                <button className="bg-blue-800 px-4 py-3 rounded-xl hover:bg-blue-600 text-xl font-serif font-bold text-white mt-8" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {error && <p className="text-xl text-red-500 font-sans font-semibold">{error}</p>}
        </>
    );
};

export default PaymentForm;

//  loading loading-spinner