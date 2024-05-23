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
    deleteFromSaveUser(state,action){
      state.userInfoAgreeSeqment = []
      state.totalEnter = 0
    }  , addProduct(state, action) {
      const userItems = action.payload.userItems;
    const userId = action.payload.userId;
    const existingUser = state.userInfoAgreeSeqment.find(user => user.id === userId);
    if (existingUser) {
      existingUser.cartItems = userItems;
    } else {
      const newUser = {
        id: state.totaluser + 1,
        cartItems: userItems
      };
      state.userInfo.push(newUser);
      state.totaluser += 1;
    }
  },
  },
});

export const infoActions = UsersInfoAgree.actions;
export default UsersInfoAgree;
