import PaymentForm from "../PaymentForm/PaymentForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useBookedClasses from "../../../../../CustomHook/useBookedClasses";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT___);
const Payment = () => {
    console.log(stripePromise)
    const { bookedClass } = useBookedClasses();
    console.log(bookedClass)
    return (
        <div>
            <h1 className="text-8xl font-serif font-bold text-slate-950 text-start my-10">Payment Now</h1>

            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
        </div>
    );
};

export default Payment;