import React from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="w-6/12 m-auto pt-10">
      <div className="flex justify-between items-center mb-4 pb-20">
        <h2 className="text-xl font-bold text-gray-600 underline">Cart</h2>

        <button
          className="px-9 py-1 bg-red-200 text-gray-600 text-sm font-medium border-2 border-red-300 rounded-md"
          onClick={handleClearCart}
        >
          Clear
        </button>
      </div>
      <RestaurantMenuItem data={cartItems} />
    </div>
  );
};

export default Cart;
