import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const ComponentC: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("ComponentC must be used within an AppProvider");
  }

  const { value } = context;

  return <div>Current value: {value}</div>;
};

export default ComponentC;
