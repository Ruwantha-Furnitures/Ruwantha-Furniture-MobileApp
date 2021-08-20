import React from "react";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state.map((item, index) => {
          if (item.itemId === action.payload.itemId) {
            items[index] = {
              itemId: action.payload.itemId,
              quantity: action.payload.quantity,
              name: action.payload.name,
              price: action.payload.price,
            };
          }
        }),
      };
    // return {
    //   items: [
    //     ...state.items,
    //     {
    //       itemId: action.payload.itemId,
    //       quantity: action.payload.quantity,
    //       name: action.payload.name,
    //       price: action.payload.price,
    //     },
    //   ],
    // };
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
