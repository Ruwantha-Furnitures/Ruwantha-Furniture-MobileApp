import React from "react";

export const cartReducer = (state, action) => {
  // if (action.type === "increment") {
  //   console.log("In the state");
  //   console.log(JSON.stringify(state));
  //   state.items.map((item, index) => console.log(item));
  // }
  console.log(action.payload);
  switch (action.type) {
    case "increment":
      return {
        // items: [
        //   state.items.map((item, index) => {
        //     console.log("Inside the loop");
        //     console.log(item["itemId"]);
        //     if (item["itemId"] === action.payload.itemId) {
        //       console.log("Inside the if");
        //       console.log(item["itemId"]);
        //       state.items[index] = {
        //         itemId: action.payload.itemId,
        //         quantity: action.payload.quantity,
        //         name: action.payload.name,
        //         price: action.payload.price,
        //       };
        //     }
        //   }),
        // ],
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
