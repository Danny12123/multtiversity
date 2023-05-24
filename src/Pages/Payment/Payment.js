import React from 'react'
import "./payment.css";

const Payment = ({ userInfo }) => {
  return (
    <div id="payment">
      <div>
        <div className="head">
          <img src="./image/icon.png" alt="" />
        </div>
        <div className="payment_hold">
          <div>
            <h1>Multiversity Of Africa</h1>
            <h3>Executive Short Course Registration Form</h3>
            <p>
              Kindly contact us on the numbers below if you need clarification
              on any of our courses.
            </p>
            <h4>
              Contact us on <span>0302 937 688 / 0500 040 202</span>
            </h4>
          </div>
        </div>
        <div className="payment_hold">
          <div>
            <h6>Application success</h6>
            <h6>Thank you for your application</h6>
            <h5>{userInfo?.firstName}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment
