import { createSlice } from "@reduxjs/toolkit";

export const stepSlice = createSlice({
  name: "steps",
  initialState: {
    actualStep: 0,
    enabledSteps: false,
  },
  reducers: {
    nextStep: (state) => {
      console.log(state);
      state.actualStep += 1;
    },
    backStep: (state) => {
      if (state.actualStep === 0) return;
      state.actualStep -= 1;
    },
    handleEnableDisabledSteps: (state) => {
      state.enabledSteps = !state.enabledSteps;
    },
  },
});

export const { nextStep, backStep, handleEnableDisabledSteps } =
  stepSlice.actions;

export const selectStep = (state: {
  actualStep: number;
  enabledSteps: boolean;
}) => state.actualStep;

export default stepSlice.reducer;
