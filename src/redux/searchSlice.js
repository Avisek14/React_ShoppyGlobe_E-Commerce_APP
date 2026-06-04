// Search slice - manages search query and category filter
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    category: 'all',
    sortBy: 'default',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearchQuery, setCategory, setSortBy } = searchSlice.actions;
export default searchSlice.reducer;