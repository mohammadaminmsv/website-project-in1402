import { createSlice } from "@reduxjs/toolkit";

const cardList = createSlice({
  name: "card",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCard(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.item.id === newItem.item.id
      );

      if (existingItem) {
        existingItem.counts += newItem.counts;
      } else {
        state.items.push(newItem);
      }
    },
    incrementCount(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.item.id === id);
      if (existingItem) {
        existingItem.counts += 1;
      }
    },
    decrementCount(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.item.id === id);
      if (existingItem) {
        existingItem.counts -= 1;
        if (existingItem.counts <= 0) {
          state.items = state.items.filter((item) => item.item.id !== id);
        }
      }
    },
  },
});

export const cardActons = cardList.actions;
export default cardList;
