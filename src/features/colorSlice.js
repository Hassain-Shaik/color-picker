import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorCode: "#000000",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeBgColor: (state, action) => {
      state.colorCode = action.payload;
    },
  },
});
export const colorSelector = (state) => state.color.colorCode;
export const { changeBgColor } = colorSlice.actions;
export default colorSlice.reducer;
