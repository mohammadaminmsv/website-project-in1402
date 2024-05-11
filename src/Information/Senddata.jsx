import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "./FetchUserInfo";
import { NotiActions } from "./Notiaction";
import { useEffect } from "react";

export const sendUserDataToDb = (form) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://amin-test-web-exp-default-rtdb.firebaseio.com/UserInformation.json`,
        {
          method: "PUT",
          body: JSON.stringify(form),
        }
      );

      const responseData = await response.json();
    };
    try {
      sendRequest();
      dispatch(
        NotiActions.showNotification({
          open: true,
          message:
            " ثبت نام شما تکمیل شد برای ویرایش دوباره اطلاعات در صفحه پروفایل کاربری خود اقدام کنید",
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
