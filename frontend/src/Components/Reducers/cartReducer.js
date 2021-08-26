import React from "react";

export const cartReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "initiate":
      return {
        quantity: action.payload.quantity,
        totalAmount: action.payload.totalAmount,
      };
    case "increment":
      return {
        quantity: state.quantity + 1,
      };
    case "decrement":
      if (state.quantity === 1) {
        return {
          quantity: 1,
        };
      } else {
        return {
          quantity: state.quantity - 1,
        };
      }
    case "delete":
      return {
        quantity: state.quantity - action.payload.quantity,
      };
    case "add": {
      return {
        quantity: state.quantity + action.payload.quantity,
      };
    }
  }
};

export const CartContext = React.createContext();
