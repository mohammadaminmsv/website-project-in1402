import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendUserDataToDb } from "./Senddata";
import { useDispatch } from "react-redux";

const UserInfo = createSlice({
  name: "user",
  initialState: {
    userInfo: [],
    totaluser: 0,
    totalchange: 0,
  },
  reducers: {
    addUser(state, action) {
      const newUser = action.payload;
      state.userInfo.push({ ...newUser, id: state.totaluser + 1  , cardItem : []});
      state.totaluser += 1;
    },

    changeInfoOfUser(state, action) {
      const updatedUser = action.payload;
      state.userInfo.push({ ...updatedUser, totalchange: totalchange + 1 });

    },
   
  },
});
 

export const UserActions = UserInfo.actions;
export default UserInfo;
