import axios from 'axios'
import React from 'react'
import { NotiActions } from './Notiaction';


const addbutItemToDb = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `https://amin-test-web-exp-default-rtdb.firebaseio.com/UserInformation/userInfo/${userData.userId - 1}/cardItem.json`,
        caritem = [userData] 
      );

      console.log('Data saved successfully:', response.data);

      dispatch(NotiActions.showNotification({
        open: true,
        message: "اطلاعات با موفقیت در پایگاه داده ذخیره شد",
        type: "success",
      }));
    } catch (error) {
      console.error('Failed to save data:', error);

      dispatch(NotiActions.showNotification({
        open: true,
        message: "خطا در ذخیره‌سازی داده‌ها",
        type: "error",
      }));
    }
  };
};

export default addbutItemToDb
