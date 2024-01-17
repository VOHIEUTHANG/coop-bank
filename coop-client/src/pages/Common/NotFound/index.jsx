import React from "react";
import { Button, Result } from "antd";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const ResultStyled = styled(Result)`
  .ant-result-icon.ant-result-image {
    margin: unset;
  }
`;
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <ResultStyled
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => {
            console.log("123");
            navigate("/");
          }}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
