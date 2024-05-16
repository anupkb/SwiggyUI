import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import Cart from "./components/Cart";
import { Search, Offers, Services, Signin } from "./components/Nav";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const navComponents = {
  Search,
  Offers,
  Services,
  Signin,
};

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
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
