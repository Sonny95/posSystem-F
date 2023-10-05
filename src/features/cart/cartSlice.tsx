import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface itemState {
  cartItem: any;
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState = {
  //if it doesn't have a data, make a []
  cartItem: [] as any[],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = state.cartItem.findIndex(
        (item: { id: number }) => item.id === action.payload.id
      );
      //   새로운 아이템이면 푸쉬해주기
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        console.log(current(state.cartItem));
      } else {
        // 있는거면 퀀티티 1 올려주기
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
      }
    },
    decreasmentQuantity(state, action) {
      //adjust quantity from cart also when the item qty 1 and click the - then remove item
      const itemIndex = state.cartItem.findIndex(
        (cartItem: { id: any }) => cartItem.id === action.payload.id
      );
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItem.filter(
          (cartItem: { id: any }) => cartItem.id !== action.payload.id
        );
        state.cartItem = nextCartItems;
      }
    },
    removeItem(state, action) {
      //필터 사용해서 거르려는 아이디랑 맞는거 삭제하고 업데이트
      const nextCartItems = state.cartItem.filter(
        (cartItem: { id: any }) => cartItem.id !== action.payload.id
      );
      state.cartItem = nextCartItems;
    },
    initCart(state, action) {
      state.cartItem = [];
    },
    updateTotals(state, action) {
      console.log(state.cartItem, "state.cartItem");
      let { total, quantity } = state.cartItem.reduce(
        (
          cartTotal: { total: number; quantity: any },
          cartItem: { mealPrice: any; cartQuantity: any }
        ) => {
          const { mealPrice, cartQuantity } = cartItem;
          const itemTotal = mealPrice * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, decreasmentQuantity, removeItem, initCart, updateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
function current(cartItem: any): any {
  throw new Error("Function not implemented.");
}
