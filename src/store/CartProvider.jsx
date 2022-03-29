import React, { useReducer } from "react";
import CardContext from "./cart-context";

const defaultReducer = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultReducer;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultReducer
  );

  const cartAddItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const cartRemoveItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cardContext = [
    {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: cartAddItemHandler,
      removeItem: cartRemoveItemHandler,
    },
  ];

  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;
