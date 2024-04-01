import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";

const App = () => {
  return <h3>Hello World!</h3>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
