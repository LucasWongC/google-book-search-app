import { createSlice } from "@reduxjs/toolkit";
import { IMainState } from "app/config/@interfaces/redux.interface";

const initialState: IMainState = {
  books: [],
  list: [],
};

export const slice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setBooks, setList } = slice.actions;

export default slice.reducer;
