import React from "react";

import styled from "styled-components";
import Modal from "../UI/Modal";

const Div1 = styled.div`
  .cart-items {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;

const Div2 = styled.div`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  button:hover,
  button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  .button-close {
    color: #8a2b06;
  }

  .button-order {
    background-color: #8a2b06;
    color: white;
  }
`;

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "pizza", amount: "2", price: "200" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <Div1>
        {cartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>63</span>
        </div>
      </Div1>
      <Div2>
        <button className="button-close" onClick={props.onClose}>
          Close
        </button>
        <button className="button-order">Order</button>
      </Div2>
    </Modal>
  );
};

export default Cart;
