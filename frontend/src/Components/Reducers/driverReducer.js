import React from "react";

export const driverReducer = (state, action) => {
  console.log("state");
  console.log(state);
  console.log(action);
  console.log("----");
  switch (action.type) {
    case "initiate":
      return {
        availability: parseInt(action.payload.availability),
      };
    case "change":
      return {
        availability: parseInt(action.payload.availability),
      };
  }
};

export const DriverContext = React.createContext();
