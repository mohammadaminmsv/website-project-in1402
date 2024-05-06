import { configureStore } from "@reduxjs/toolkit";
import UserInfo from "./FetchUserInfo";
import Notiaction from "./Notiaction";

const store = configureStore({
  reducer: {
    user: UserInfo.reducer,
    noti: Notiaction.reducer,
    
  },
});

export default store;
