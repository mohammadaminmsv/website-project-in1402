import React from "react";
import { createSlice } from "@reduxjs/toolkit";
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
      state.userInfo.push({ ...newUser, id: state.totaluser + 1 });
      state.totaluser += 1;
    },

    changeInfoOfUser(state, action) {
      const updatedUser = action.payload;
      const index = state.userInfo.findIndex(
        (user) => user.email === updatedUser.email
      );
      if (index !== -1) {
        state.userInfo[index] = { ...state.userInfo[index], ...updatedUser };
      } else {
        console.log("User not found");
      }
    },
    deleteUser(state, action) {},
  },
});

export const UserActions = UserInfo.actions;
export default UserInfo;
