import React, { useState } from "react";
import ReactDOM from "react-dom";
import Component1 from "./components/Component1";
import { AppProvider } from "./components/Context-Provider";

const App = () => {
  return (
    <AppProvider>
      <Component1 />
    </AppProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
