import { createSlice } from '@reduxjs/toolkit';
import { evaluate } from 'mathjs';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: '',
  },
  reducers: {
    addCharacter: (state, action) => {
      state.value += action.payload;
    },
    clearDisplay: (state) => {
      state.value = '';
    },
    calculateResult: (state) => {
      try {
        state.value = evaluate(state.value).toString();
      } catch (e) {
        state.value = 'Error';
      }
    },
  },
});

export const { addCharacter, clearDisplay, calculateResult } = calculatorSlice.actions;

export default calculatorSlice.reducer;
