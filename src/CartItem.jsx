import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementItem,
  decrementItem,
  removeItem
} from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Total Items: {cart.totalQuantity}</h2>
      <h3>Total Cost: ₹{cart.totalAmount}</h3>

      {cart.items.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
          <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;
