import React from "react";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        userToken: action.payload.userToken,
        userLevel: action.payload.userLevel,
      };
    case "decrement":
      return {
        userToken: null,
        userLevel: 1,
      };
    case "delete":
      return {};
    case "add": {
      return {
        items: [
          ...state.items,
          {
            itemId: action.payload.itemId,
            quantity: action.payload.quantity,
            name: action.payload.name,
            price: action.payload.price,
          },
        ],
      };
    }
  }
};

export const CartContext = React.createContext();
