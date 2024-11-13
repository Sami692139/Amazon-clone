// import React from "react";
import classes from "./header.module.css";
// import {Link} from 'react-router-dom'
import { GrLocation } from "react-icons/gr"; // Location pin icon
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

  const Header = () => {

  return (
    <>
    <section>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            {/* this <a 'herf' to change 'link' ,'to' */}
            <a href="/"> 
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo" />       
             </a>
            <div className={classes.delivery}>
              <span>
                <GrLocation />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon" />
            <BsSearch size={25} />
          </div>
          {/* right side  section */}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
           </a>
            {/* sign in  */}
            <a href="">
               <p>Sign In</p>
               <span>Account & Lists</span>
            </a>
               {/* orders returns */}
            <a href="orders">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
           </div>
        </div>
    </section>
    <LowerHeader />
  </>
 );
};

export default Header;
// Render to LayOut.jsx
