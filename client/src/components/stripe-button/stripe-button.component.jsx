import React from "react";
import StripeCheckOut from "react-stripe-checkout";
import axios from "axios";

const StripeCheckOutButton =({price})=>{
    const priceForStripe= price * 100;
    const publishableKey= "pk_test_FcPMimt6xsw77ZRLg1CEyN0K00casaZhzX";
    
    const onToken = token=>{
        
        axios({
            url:"payment",
            method: "post",
            data:{
                amount: priceForStripe,
                token
            }
        }).then(response=> {
            alert("Payment succesful");
        }).catch(error=>{
           console.log("Payment error", JSON.parse(error));
            alert("There was an issue with your payment. Please sure you used the provided credi cart");
        })
        
    };

    return(
        <StripeCheckOut 
            label="Pay Now"
            name="Crwn Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />

    )
};

export default StripeCheckOutButton;