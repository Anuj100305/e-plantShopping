import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      state.totalQuantity++;
      state.totalAmount += item.price;

      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
      } else {
        existing.quantity++;
      }
    },
    incrementItem(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      item.quantity++;
      state.totalQuantity++;
      state.totalAmount += item.price;
    },
    decrementItem(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      item.quantity--;
      state.totalQuantity--;
      state.totalAmount -= item.price;

      if (item.quantity === 0) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    removeItem(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.price * item.quantity;
      state.items = state.items.filter((i) => i.id !== action.payload);
    }
  }
});

export const { addToCart, incrementItem, decrementItem, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
