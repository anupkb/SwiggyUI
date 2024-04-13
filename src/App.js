import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import { Search, Offers, Services, Signin, Cart } from "./components/Nav";

const navComponents = {
  Search,
  Offers,
  Services,
  Signin,
  Cart,
};

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
      ...Object.entries(navComponents).map(([key, Component]) => ({
        path: `/${key.toLowerCase()}`,
        element: <Component />,
      })),
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
