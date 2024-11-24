import React, { useContext, useState } from "react";
import classes from "../../pages/Payment/payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import LayOut from "../../Components/LayOut/LaOut";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

const Payment = () => {
  const [{ user, basket }] = useContext(DataContext);
  console.log(user);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardErro, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

   const handlePayment =(e)=>{
    e.preventDefault()
    //1. contacting backend || function----> to client secret


    //2. client side (react side confirmation)


    //3. after the confirmation---> order firebase database save, clear basket

   }

  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment_header}>Checkout({totalItem}) items</div>
      {/* payement section */}
      <section className={classes.payment}>
        {/* addres  */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>werdea 01 bole</div>
            <div>Addis Ababa</div>
          </div>
        </div>
        <hr />
        {/* product  */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form  */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {/* error  */}
                {cardErro && <smal style={{ color: "red" }}>{cardErro}</smal>}
                {/* card element  */}
                <CardElement onChange={handleChange} />
                {/* price  */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{display:"flex", gap: "10px"}}>
                      <p> Total Order | </p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;
