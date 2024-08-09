import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchangeCurrency } from './currencyOperations';

const initialState = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoading: false,
  isError: null,
};

const currencySlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchExchangeCurrency.rejected, state => {
        state.isError = true;
        state.exchangeInfo = null;
      });
  },
});

export const currencyReducers = currencySlice.reducer;
export const { setBaseCurrency } = currencySlice.actions;
