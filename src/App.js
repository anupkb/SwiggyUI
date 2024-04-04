import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import resData from "../utils/mockData";

const App = () => {
  return (
    <>
      <Header />
      <Body resData={resData} />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
