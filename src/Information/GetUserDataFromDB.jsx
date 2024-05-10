import { createSlice } from "@reduxjs/toolkit";


const UsersInfoAgree = createSlice({
  name: "userInfoAgree",
  initialState: {
    userInfoAgreeSeqment: [],
    totalEnter: 0,
  },
  reducers: {
    showInformationOfUser(state, action) {
      state.userInfoAgreeSeqment = action.payload;
      state.totalEnter += 1;
    },
  },
});

export const infoActions = UsersInfoAgree.actions;
export default UsersInfoAgree;
