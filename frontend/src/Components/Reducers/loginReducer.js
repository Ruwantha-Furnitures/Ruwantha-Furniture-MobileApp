import React from "react";

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        userToken: action.payload.userToken,
        userLevel: action.payload.userLevel,
      };
    case "logout":
      return {
        userToken: null,
        userLevel: 1,
      };
  }
};

export const LoginContext = React.createContext();
