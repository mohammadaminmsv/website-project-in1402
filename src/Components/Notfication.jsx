import React from "react";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { NotiActions } from "../Information/Notiaction";

const Notfication = ({ type, message }) => {
  const dispatch = useDispatch();
  const notiaction = useSelector((state) => state.noti.notiaction);
  const handleClose = () => {
    dispatch(
      NotiActions.showNotification({
        open: false,
        message: "",
        type: "",
      })
    );
  };
  return (
    <>
      {notiaction.open && (
        <Alert
          onClose={handleClose}
          className="border border-black fixed top-20"
          severity={type}
        >
          {message}
        </Alert>
      )}
    </>
  );
};

export default Notfication;
