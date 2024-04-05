import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <>
      <Header />
      {/* <Body resData={resData} /> */}
      <Body />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
