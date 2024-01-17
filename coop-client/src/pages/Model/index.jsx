import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import model from "assets/models/model.json";
import { Table, Space, Tag, List } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import relu_image from "assets/images/relu.png";
import linear_image from "assets/images/linear.png";

const Model = () => {
  const columns = [
    {
      title: "STT",
      align: "center",
      render: (text, record, index) => index + 1
    },
    {
      title: "Tên lớp",
      dataIndex: "name",
      align: "center",
      key: "name",
      render: (text) => <a>{text}</a>
    },
    {
      title: "Loại lớp",
      dataIndex: "class_name",
      align: "center",
      key: "output"
    },
    {
      title: "Cấu trúc chi tiết",
      dataIndex: "config",
      align: "center",
      width: 400,
      key: "output",
      render: (config) => {
        return config.batch_input_shape ? (
          JSON.stringify(config.batch_input_shape?.filter((_) => _))
        ) : config.name.includes("conv2d") ? (
          <table>
            <tr>
              <th>Filters</th>
              <th>Kernel Size</th>
              <th>Strides</th>
              <th>Padding</th>
              <th>Use bias</th>
            </tr>
            <tr>
              <td>{JSON.stringify(config.filters)}</td>
              <td>{JSON.stringify(config.kernel_size)}</td>
              <td>{JSON.stringify(config.strides)}</td>
              <td>{JSON.stringify(config.padding)}</td>
              <td>{<Tag color={config.use_bias ? "green" : "red"}>{`${config.use_bias}`}</Tag>}</td>
            </tr>
          </table>
        ) : (
          <CloseOutlined />
        );
      }
    },
    {
      title: "Hàm kích hoạt",
      dataIndex: "config",
      align: "center",
      key: "activation",
      render: (config) => {
        let jsx = (
          <div>
            <CloseOutlined />
          </div>
        );
        const activation = config.activation;
        if (activation === "relu") {
          jsx = (
            <div className="flex-center">
              <img
                style={{ width: "150px", height: "110px", objectFit: "cover" }}
                src={relu_image}></img>
            </div>
          );
        } else if (activation === "linear") {
          jsx = (
            <div className="flex-center">
              <img
                style={{ width: "150px", height: "110px", objectFit: "cover" }}
                src={linear_image}
              />
            </div>
          );
        } else if (activation) {
          jsx = <div>{activation}</div>;
        }
        return jsx;
      }
    },
    {
      title: "Trạng thái huấn luyện",
      dataIndex: "config",
      align: "center",
      key: "trainable",
      render: (config) => {
        return config.trainable ? <Tag color={"green"}>CÓ</Tag> : <Tag color={"red"}>KHÔNG</Tag>;
      }
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={model.config.layers || []}
        scroll={{
          y: 600
        }}
        pagination={false}
      />
    </div>
  );
};

export default Model;
