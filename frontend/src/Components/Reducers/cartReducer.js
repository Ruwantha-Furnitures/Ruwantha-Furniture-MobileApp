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
        totalAmount: state.totalAmount + action.payload.totalAmount,
      };
    case "decrement":
      if (state.quantity === 1) {
        return {
          quantity: 1,
          totalAmount: state.totalAmount,
        };
      } else {
        return {
          quantity: state.quantity - 1,
          totalAmount: state.totalAmount - action.payload.totalAmount,
        };
      }
    case "delete":
      return {
        quantity: state.quantity - action.payload.quantity,
        totalAmount: state.totalAmount - action.payload.totalAmount,
      };
    case "add": {
      return {
        quantity: state.quantity + action.payload.quantity,
        totalAmount: state.totalAmount + action.payload.totalAmount,
      };
    }
    case "logout":
      return {
        quantity: 0,
        totalAmount: 0,
      };
  }
};

export const CartContext = React.createContext();
