import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const ComponentA: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("ComponentA must be used within an AppProvider");
  }

  const { setValue } = context;

  return (
    <button onClick={() => setValue("Updated from Component A")}>
      Update from A
    </button>
  );
};

export default ComponentA;
