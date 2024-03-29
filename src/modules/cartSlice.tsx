export interface itemState {
  cartItem: any[];
  cartQuantity: number;
  cartTotalPrice: number;
}

import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

const initialState: itemState = {
  //if it doesn't have a data, make a []
  cartItem: [],
  cartQuantity: 0,
  cartTotalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = state.cartItem.findIndex(
        (item: { id: number }) => item.id === action.payload.id
      );
      //  if received a new, push
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      } else {
        // + 1 quantity
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
      }
    },
    decreasmentQuantity(state, action) {
      //adjust quantity from cart also when the item qty 1 and click the - then remove item
      const itemIndex = state.cartItem.findIndex((cartItem) => cartItem.id === action.payload.id);
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItem.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItem = nextCartItems;
      }
    },
    removeItem(state, action) {
      // delete same id item then updateby filter
      const nextCartItems = state.cartItem.filter((cartItem) => cartItem.id !== action.payload.id);
      state.cartItem = nextCartItems;
    },
    initCart(state, action) {
      state.cartItem = [];
    },
    updateTotals(state, action) {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartQuantity = quantity;
      state.cartTotalPrice = total;
    },
  },
});

export const { addToCart, decreasmentQuantity, removeItem, initCart, updateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
