import { createSlice } from "@reduxjs/toolkit";

const sliceCart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurant: null,
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.restaurant === null) {
        state.restaurant = action.payload.resCart;
        state.items.push(action.payload.item);
      } else if (state.restaurant.id != action.payload.resCart.id) {
        state.restaurant = action.payload.resCart;
        state.items = [action.payload.item];
      } else {
        state.items.push(action.payload.item);
      }
    },
    increaseCount: (state, action) => {
      state.items.map((item) => {
        if (item[0].id == action.payload) {
          item[1]++;
        }
      });
    },
    decreaseCount: (state, action) => {
      state.items.map((item, idx) => {
        if (item[0].id == action.payload) {
          item[1]--;
          if (item[1] == 0) {
            state.items.splice(idx, 1);
          }
        }
        if (state.items.length == 0) {
          state.restaurant = null;
        }
      });
    },
    clearCart: (state) => {
      // state.items.length = 0;
      state.items = [];
      state.restaurant = null;
    },
  },
});

export const { clearCart, addToCart, increaseCount, decreaseCount } =
  sliceCart.actions;

export default sliceCart.reducer;
