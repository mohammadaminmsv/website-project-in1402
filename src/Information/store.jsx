import { configureStore } from "@reduxjs/toolkit";
import UserInfo from "./FetchUserInfo";
import Notiaction from "./Notiaction";
import UsersInfoAgree from "./GetUserDataFromDB";
import { info } from "autoprefixer";
import cardList from "./Card";

const store = configureStore({
  reducer: {
    user: UserInfo.reducer,
    noti: Notiaction.reducer,
    logi: UsersInfoAgree.reducer,
    card : cardList.reducer
    
  },
});

export default store;
