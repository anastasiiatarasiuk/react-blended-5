import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchRates,
} from './currencyOperations';

const initialState = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoading: false,
  isError: null,
  rates: [],
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
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.rates = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRates.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRates.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const currencyReducers = currencySlice.reducer;
export const { setBaseCurrency } = currencySlice.actions;
