import React from "react";
import { AppProvider } from "./AppContext";
import ComponentA from "../src/ComponentA";
import ComponentB from "../src/ComponentB";
import ComponentC from "../src/ComponentC";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </AppProvider>
  );
};

export default App;
