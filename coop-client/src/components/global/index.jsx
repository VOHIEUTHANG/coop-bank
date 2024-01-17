import React from "react";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./global.css";

const Global = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#095491",
          colorBgContainer: "#fff",
          borderRadius: "9px"
        }
      }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ConfigProvider>
  );
};

export default Global;
