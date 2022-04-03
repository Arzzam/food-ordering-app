import React, { useContext } from "react";

import styled from "styled-components";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Div1 = styled.div`
  .cart-items {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: scroll;
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
  const ctx = useContext(CartContext);

  const hasItems = ctx.items.length > 0;
  const totalAmount = `₹${ctx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  
  const cartItemRemoveHandler = (id) => {};


  const cartItems = (
    <ul className="cart-items">
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <Div1>
        {cartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
      </Div1>
      <Div2>
        <button className="button-close" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="button-order">Order</button>}
      </Div2>
    </Modal>
  );
};

export default Cart;
