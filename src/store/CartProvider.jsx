import React from "react";
import CardContext from "./cart-context";

const CartProvider = (props) => {
  const cartAddItemHandler = () => {};

  const cartRemoveItemHandler = () => {};

  const cardContext = [
    {
      items: [],
      totalAmount: 0,
      addItem: { cartAddItemHandler },
      removeItem: { cartRemoveItemHandler },
    },
  ];

  return (
    <CardContext.Provider value={cardContext}>
      {props.Children}
    </CardContext.Provider>
  );
};

export default CartProvider;
