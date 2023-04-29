import { BACKGROUND_COLORS } from "@/constants";
import { getRandomInt } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

interface ColorState {
  value: string;
}

const initialState: ColorState = {
  value: BACKGROUND_COLORS[getRandomInt(BACKGROUND_COLORS.length)],
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    randomizeColor: (state) => {
      state.value = BACKGROUND_COLORS[getRandomInt(BACKGROUND_COLORS.length)];
    },
  },
});

export const { randomizeColor } = colorSlice.actions;

export default colorSlice.reducer;
