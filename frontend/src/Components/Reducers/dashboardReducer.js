import React from "react";

export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "initiateTodayCompleted":
      return {
        todayCompleted: parseInt(action.payload.todayCompleted),
        monthlyCompleted: state.monthlyCompleted,
      };

    case "initiateMonthlyCompleted":
      return {
        todayCompleted: state.todayCompleted,
        monthlyCompleted: parseInt(action.payload.monthlyCompleted),
      };

    case "statusChanged":
      return {
        todayCompleted: parseInt(state.todayCompleted) + 1,
        monthlyCompleted: parseInt(state.monthlyCompleted) + 1,
      };
  }
};

export const DashboardContext = React.createContext();
