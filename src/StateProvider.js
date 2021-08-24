import React, { createContext, useContext, useReducer } from "react";
// Data layer
export const StateContext = createContext();

// Provide that wrap whole app to connect to the Data Layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
