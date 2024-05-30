import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: []
};
const wishListSlice = createSlice({
  name: "wishListSlice",
  initialState,
  reducers: {
    addWishList: (state, action) => {
      state.wishList.push(action.payload);
      localStorage.setItem('wishList', JSON.stringify(state.wishList));


    },
    removeWishList: (state, action) => {
      state.wishList = state.wishList.filter((ele) => ele.idMeal !== action.payload.idMeal);
      console.log(action.payload,"action.payload.idMeal");
      localStorage.removeItem('wishList', JSON.stringify(state.wishList))
    },

    emptyWishList: (state) => {
      state.wishList = [];
    }
  }
});

export const {
  addWishList,
  removeWishList,
  emptyWishList
} = wishListSlice.actions;

export default wishListSlice.reducer;
