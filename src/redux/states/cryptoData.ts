import {createSlice, current} from '@reduxjs/toolkit';
import {Crypto} from 'src/models';

const initialCryptoListState: Crypto[] = [];

export const cryptoListSlice = createSlice({
  name: 'cryptoList',
  initialState: initialCryptoListState,
  reducers: {
    addCryptoToList: (state, action) => [...current(state), action.payload],
    updateCryptoToList: (state, action) => action.payload,
  },
});

export const {addCryptoToList, updateCryptoToList} = cryptoListSlice.actions;

export default cryptoListSlice.reducer;
