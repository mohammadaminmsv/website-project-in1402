import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "./FetchUserInfo";
import { NotiActions } from "./Notiaction";
import { useEffect } from "react";

export const UpdateDataOfUser = (form) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      console.log(form[0].id);
      const response = await fetch(
        `https://amin-test-web-exp-default-rtdb.firebaseio.com/UserInformation/userInfo/${form[0].id - 1}.json`,
        {
          method: "PUT",
          body: JSON.stringify(form),
        }
      );

      const responseData = await response.json();
      console.log(responseData);
    };
    try {
      sendRequest();
      dispatch(
        NotiActions.showNotification({
          open: true,
          message: "اطلاعات شما با موفقیت تغییر کرد",
          type: "success",
        })
      );
    } catch {
      dispatch(
        NotiActions.showNotification({
          open: true,
          message: "ارتباط برقرار نشد دوباره تلاش کنید",
          type: "error",
        })
      );
    }
  };
};
