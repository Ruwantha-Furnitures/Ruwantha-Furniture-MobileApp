import React from "react";

export const cartReducer = (state, action) => {
  console.log("state is");
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case "initiate":
      return {
        cartProductID: action.payload.cartProductID,
        quantity: action.payload.quantity,
        totalAmount: action.payload.totalAmount,
        totalDiscountAmount: action.payload.totalDiscount,
      };
    case "increment":
      return {
        cartProductID: state.cartProductID,
        quantity: state.quantity + 1,
        totalAmount:
          parseInt(state.totalAmount) + parseInt(action.payload.totalAmount),
        totalDiscountAmount:
          parseInt(state.totalDiscountAmount) +
          parseInt(action.payload.discount),
      };
    case "decrement":
      return {
        cartProductID: state.cartProductID,
        quantity: state.quantity - 1,
        totalAmount:
          parseInt(state.totalAmount) - parseInt(action.payload.totalAmount),
        totalDiscountAmount:
          parseInt(state.totalDiscountAmount) -
          parseInt(action.payload.discount),
      };
    case "delete":
      return {
        cartProductID: state.cartProductID.filter(
          (productId) => productId === action.payload.id
        ),
        quantity: parseInt(state.quantity) - parseInt(action.payload.quantity),
        totalAmount:
          parseInt(state.totalAmount) - parseInt(action.payload.totalAmount),
        totalDiscountAmount:
          parseInt(state.totalDiscountAmount) -
          parseInt(action.payload.discount),
      };
    case "add": {
      if (state.quantity > 0) {
        if (!state.cartProductID.includes(action.payload.id)) {
          return {
            cartProductID: [...state.cartProductID, action.payload.id],
            quantity: state.quantity + action.payload.quantity,
            totalAmount:
              parseInt(state.totalAmount) +
              parseInt(action.payload.totalAmount),
            totalDiscountAmount:
              parseInt(state.totalDiscountAmount) +
              parseInt(action.payload.discount),
          };
        } else {
          return state;
        }
      } else {
        return {
          cartProductID: [action.payload.id],
          quantity: state.quantity + action.payload.quantity,
          totalAmount:
            parseInt(state.totalAmount) + parseInt(action.payload.totalAmount),
          totalDiscountAmount: parseInt(action.payload.discount),
        };
      }
    }
    case "deliveryCharges":
      return {
        cartProductID: state.cartProductID,
        quantity: state.quantity,
        totalAmount: parseInt(state.totalAmount),
        totalDiscountAmount: state.totalDiscountAmount,
        deliveryCharges: parseInt(action.payload.deliveryCharges),
      };
    case "logout":
      return {
        quantity: 0,
        totalAmount: 0,
      };
  }
};

export const CartContext = React.createContext();
