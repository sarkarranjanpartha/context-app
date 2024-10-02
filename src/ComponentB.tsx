import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const ComponentB: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("ComponentB must be used within an AppProvider");
  }

  const { setValue } = context;

  return (
    <button onClick={() => setValue("Updated from Component B")}>
      Update from B
    </button>
  );
};

export default ComponentB;
