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
      const newItem = action.payload;
      const exisitingUser = state.userInfo.find(
        (item) => item.code === newItem.code
      );
      console.log(newItem);
      if (false) {
        console.log(exisitingUser);
      } else {
        state.totaluser++;
        state.userInfo.push({
          name: newItem.name,
          lastname: newItem.lastname,
          email: newItem.email,
          phonenumber: newItem.phonenumber,
          password: newItem.password,
          repassword: newItem.repassword,
          address: newItem.address,
          homephone: newItem.homenumber,
          NationalCode: newItem.code,
        });
      }
    },
    changeInfoOfUser(state, action) {
      const newItem = action.payload;
      state.totalchange++;
      state.userInfo.push({
        name: newItem.name,
        lastname: newItem.lastname,
        email: newItem.email,
        phonenumber: newItem.phonenumber,
        password: newItem.password,
        repassword: newItem.repassword,
        address: newItem.address,
        homephone: newItem.homenumber,
        NationalCode: newItem.code,
      });
    },
    deleteUser(state, action) {},
  },
});

export const UserActions = UserInfo.actions;
export default UserInfo;
