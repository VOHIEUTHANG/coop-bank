import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import {
  Button,
  Col,
  Row,
  Flex,
  Divider,
  Spin,
  Image,
  Modal,
  Progress,
  Drawer,
  List,
  Empty,
  Tag,
  Switch
} from "antd";
import {
  AlertOutlined,
  UploadOutlined,
  SaveOutlined,
  PauseOutlined,
  EyeOutlined,
  CarOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import Service from "services/main.service";
import styled from "styled-components";
import { toast } from "react-toastify";
import { cdnPath, mappingObject } from "utils/utils";
import ReactPlayer from "react-player";
import { FILE_TYPE, LIGHT_COLOR, PREDICT_STATUS, TOPIC, VehicleObject } from "./constant";
import placholder from "assets/images/media_placeholder.png";
import SocketClient from "helper/socket";
import LocalStorage from "helper/local-storage";
import { useLocation, useNavigate } from "react-router-dom";
import TrafficLight from "./components/TrafficLight";

const FrameWrapperStyled = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  height: 100%;
  padding: 10px;
`;

const Frame = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  const inputrRef = useRef();
  const location = useLocation();

  const uploadDataDefault = location.state?.input_data
    ? location.state?.input_data
    : LocalStorage.get("upload_data");
  const predictDataDefault = location.state?.input_data ? null : LocalStorage.get("predict_data");
  const vieoDataDefault = location.state?.input_data ? null : LocalStorage.get("video_data");
  const fileTypeDefault = location.state?.input_data
    ? location.state?.input_data.type
    : LocalStorage.get("file_type");

  const [enableSegmentation, setEnableSegmentation] = useState(true);
  const [uploadData, setUploadData] = useState(uploadDataDefault);
  const [predictData, setPredictData] = useState(predictDataDefault);
  const [loading, setLoading] = useState();
  const [uploadLoading, setUploadLoading] = useState(false);
  const [fileType, setFileType] = useState(fileTypeDefault);
  const [connected, setConnected] = useState(false);
  const [isPredicting, setIsPredicting] = useState();
  const [image, setImage] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [videoResult, setVideoResult] = useState(vieoDataDefault);
  const [saveLoading, setSaveLoading] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [lightColor, setLightColor] = useState(LIGHT_COLOR.UNKNOWN);
  const [roadPercent, setRoadPercent] = useState(0);

  useEffect(() => {
    if (lightColor) {
      switch (lightColor) {
        case "red":
          toast.error("Cảnh báo đèn đỏ, dừng xe !");
          break;
        case "green":
          toast.success("Đèn chuyển xanh, xe tiếp tục di chuyển !");
          break;
        case "yellow":
          toast.warning("Đèn vàng, vui lòng đi chậm !");
          break;
      }
    }
  }, [lightColor]);

  const reloadServer = useCallback(() => {
    if (isPredicting) {
      Service.restartServer()
        .catch(() => {})
        .finally(() => {
          setIsPredicting(false);
          setLoading(false);
          setImage("");
        });
    }
  }, [isPredicting]);

  const currentVehicleCount = useMemo(() => {
    if (historyData && historyData.length > 0) {
      let objects = historyData[0].objects
        ?.slice(7)
        .split(",")
        ?.map((_) => _.trim())
        .filter((_) => _);

      objects = objects.filter((object) => {
        if (VehicleObject.some((vehicle) => object.includes(vehicle))) {
          return object;
        }
        return false;
      });

      const vehicleCount = objects.reduce((total, object) => {
        return total + object.split(" ")[0] * 1;
      }, 0);
      return vehicleCount;
    }
    return null;
  }, [historyData]);

  useEffect(() => {
    SocketClient.connect();

    SocketClient.on(TOPIC, ({ status, data }) => {
      setLoading(false);
      setIsPredicting(true);
      if (status === PREDICT_STATUS.PROCESSING) {
        setHistoryData((previous) =>
          [{ objects: data.objects, time: data.t2 - data.t1 }].concat(previous)
        );
        const percent = (data?.current_frame || 0) / (data?.total_frame || 1);
        setProgressPercent(Math.round(percent * 100));
        setImage(`data:image/png;base64,${data.image}`);
        const lightColor = data.light_list?.find((color) => color > 0) || 0;
        let color = "unknown";
        switch (lightColor) {
          case LIGHT_COLOR.RED:
            color = "red";
            break;
          case LIGHT_COLOR.GREEN:
            color = "green";
            break;
          case LIGHT_COLOR.YELLOW:
            color = "yellow";
            break;
        }
        setLightColor(color);
        setRoadPercent(data?.road_percent || 0);
      } else if (status === PREDICT_STATUS.DONE) {
        setVideoResult(data);
        setIsPredicting(false);
      }
    });

    SocketClient.on("connect", () => {
      setConnected(true);
    });

    SocketClient.on("disconnect", () => {
      setConnected(false);
    });

    return () => {
      SocketClient.disconnect();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", reloadServer);
    return () => {
      window.removeEventListener("beforeunload", reloadServer);
    };
  }, [isPredicting]);

  // socket handler
  useEffect(() => {
    LocalStorage.set("upload_data", uploadData);
    LocalStorage.set("predict_data", predictData);
    LocalStorage.set("file_type", fileType);
    LocalStorage.set("video_data", videoResult);
  }, [uploadData, predictData, fileType, videoResult]);

  return (
    <Flex vertical className="h-full">
      <div className="flex-1">
        <Row className="h-full" gutter={20}>
          <Col className="h-full" span={12}>
            <Flex vertical className="h-full" gap="large">
              <div className="flex-1">
                <div className="h-full">
                  <FrameWrapperStyled>
                    <Frame>
                      {uploadData ? (
                        <>
                          {fileType === FILE_TYPE.IMAGE ? (
                            <Image
                              style={{
                                maxWidth: "100%",
                                maxHeight: "50vh"
                              }}
                              src={cdnPath(uploadData?.path)}
                            />
                          ) : (
                            <ReactPlayer
                              width="100%"
                              height="100%"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "50vh"
                              }}
                              controls
                              url={cdnPath(uploadData?.path)}
                            />
                          )}
                        </>
                      ) : (
                        <>
                          {uploadLoading ? (
                            <Spin size="large" />
                          ) : (
                            <img
                              style={{ maxWidth: "300px", maxHeight: "100%" }}
                              src={placholder}
                            />
                          )}
                        </>
                      )}
                    </Frame>
                  </FrameWrapperStyled>
                </div>
              </div>
              <div>
                <Flex gap="small" wrap="wrap" justify="center">
                  <Button
                    loading={uploadLoading}
                    icon={<UploadOutlined />}
                    size="large"
                    onClick={() => {
                      inputrRef?.current.click();
                    }}>
                    Tải lên
                    <input
                      ref={inputrRef}
                      onChange={(e) => {
                        const file = e.target?.files?.[0];
                        if (!file) {
                          toast.error("Không tìm thấy file !");
                        } else {
                          const fileType = file.type;
                          if (fileType.startsWith("image/")) {
                            setFileType(FILE_TYPE.IMAGE);
                          } else if (fileType.startsWith("video/")) {
                            setFileType(FILE_TYPE.VIDEO);
                          } else {
                            return toast.error("Định dạng file không hỗ trợ !");
                          }
                          const formData = new FormData();
                          formData.append("file", file);
                          setUploadLoading(true);
                          Service.upload(formData)
                            .then((data) => {
                              setUploadData(data);
                              setProgressPercent(0);
                              setVideoResult();
                              setPredictData();
                            })
                            .catch((err) => toast.error(err?.message || "Upload file xảy ra lỗi !"))
                            .finally(() => {
                              setUploadLoading(false);
                            });
                        }
                      }}
                      type="file"
                      name="file"
                      id="file_upload"
                      accept="image/*,video/*"
                      style={{ display: "none" }}
                    />
                  </Button>
                </Flex>
              </div>
            </Flex>
          </Col>
          <Col className="h-full" span={12}>
            <div className="h-full">
              <Flex vertical className="h-full" gap="large">
                <div className="flex-1">
                  <div className="h-full">
                    <FrameWrapperStyled>
                      <Frame>
                        {!loading && (currentVehicleCount || currentVehicleCount === 0) && (
                          <Flex
                            gap="small"
                            wrap="wrap"
                            justify="center"
                            style={{ marginBottom: "15px" }}>
                            <div>
                              <CarOutlined style={{ fontSize: "150%" }} />{" "}
                              <span>{currentVehicleCount}</span>
                            </div>
                            {currentVehicleCount || currentVehicleCount === 0 ? (
                              <div>
                                {currentVehicleCount < 10 ? (
                                  <Tag icon={<CheckCircleOutlined />} color="success">
                                    Đường thoáng
                                  </Tag>
                                ) : (
                                  <Tag icon={<ExclamationCircleOutlined />} color="warning">
                                    Đường đông
                                  </Tag>
                                )}
                              </div>
                            ) : null}
                          </Flex>
                        )}
                        {loading ? (
                          <Spin size="large" />
                        ) : (isPredicting && image) ||
                          (!isPredicting && predictData && fileType === FILE_TYPE.IMAGE) ? (
                          <Image
                            style={{
                              maxWidth: "100%",
                              maxHeight: "60vh"
                            }}
                            src={image || cdnPath(predictData?.path)}
                          />
                        ) : videoResult ? (
                          <ReactPlayer
                            width="100%"
                            height="100%"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "50vh"
                            }}
                            controls
                            url={cdnPath(videoResult?.path)}
                          />
                        ) : null}
                      </Frame>
                    </FrameWrapperStyled>
                  </div>
                </div>
                <div className="ml-1">
                  <Progress percent={progressPercent || 0} size={["100%", 10]} />
                </div>
              </Flex>
            </div>
          </Col>
        </Row>
      </div>
      <Divider />
      <div style={{ paddingBottom: "20px" }}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <Flex gap="small" wrap="wrap" justify="end" align="center">
              <Switch checked={enableSegmentation} onChange={setEnableSegmentation} />
              {!isPredicting && (
                <Button
                  icon={<SaveOutlined />}
                  size="large"
                  loading={saveLoading}
                  onClick={() => {
                    // if uploaded and have file type and have predict image or predict video
                    if (uploadData && fileType && (predictData || videoResult)) {
                      const data = {
                        input: uploadData?.path,
                        input_save_path: uploadData?.save_path,
                        output: fileType === FILE_TYPE.VIDEO ? videoResult.path : predictData.path,
                        type: fileType
                      };
                      setSaveLoading(true);
                      Service.createPredictResult(data)
                        .then((result) => {
                          if (result?.status) {
                            toast.success("Lưu kết quả dự đoán thành công");
                          } else {
                            toast.warning("Kết quả dự đoán đã được lưu");
                          }
                        })
                        .catch((err) => {
                          toast.error(err?.message || "Lưu kết quả dự đoán thất bại !");
                        })
                        .finally(() => {
                          setSaveLoading(false);
                        });
                    } else {
                      toast.warning("Chưa có dữ liệu dự đoán !");
                    }
                  }}>
                  Lưu
                </Button>
              )}
              {isPredicting && (
                <Button
                  icon={<PauseOutlined />}
                  size="large"
                  danger
                  type="primary"
                  onClick={() => {
                    setOpenConfirm(true);
                  }}>
                  Dừng dự đoán
                </Button>
              )}
              <Button
                icon={<EyeOutlined />}
                size="large"
                type="dashed"
                onClick={() => {
                  setOpenDrawer(true);
                }}>
                Chi tiết
              </Button>
              <Button
                icon={<AlertOutlined />}
                size="large"
                type="primary"
                loading={isPredicting}
                onClick={() => {
                  if (!uploadData) {
                    toast.warning("Vui lòng tải lên file dữ liệu !");
                  } else {
                    setIsPredicting(true);
                    setLoading(true);
                    if (fileType === FILE_TYPE.IMAGE) {
                      Service.predict({
                        path: uploadData?.save_path,
                        enable_segmentation: enableSegmentation
                      })
                        .then((data) => {
                          setPredictData(data);
                        })
                        .finally(() => {
                          setLoading(false);
                          setIsPredicting(false);
                          setProgressPercent(100);
                        });
                    } else {
                      if (connected) {
                        SocketClient?.emit(TOPIC, {
                          request_type: "PREDICT",
                          path: uploadData?.save_path,
                          enable_segmentation: enableSegmentation
                        });
                      } else {
                        toast.warning("Chưa kết nối với máy chủ socket !");
                      }
                    }
                  }
                }}>
                Dự đoán
              </Button>
            </Flex>
          </Col>
        </Row>
      </div>
      <Drawer
        title="Chi tiết dự đoán"
        placement="left"
        closable={false}
        styles={{
          mask: {
            backgroundColor: "rgba(0,0,0,0.2)"
          }
        }}
        onClose={() => {
          setOpenDrawer(false);
        }}
        open={openDrawer}
        getContainer={false}>
        <TrafficLight light={lightColor} />
        <Divider />
        <Progress percent={roadPercent} />
        <Divider />
        {historyData && historyData.length > 0 ? (
          <List
            bordered
            dataSource={historyData}
            renderItem={(item, index) => {
              const objects = item.objects
                ?.slice(7)
                .split(",")
                ?.map((_) => _.trim())
                .filter((_) => _);
              const time = item?.time?.toFixed(2);
              return (
                <List.Item
                  style={
                    index === 0
                      ? {
                          border: "1px solid green",
                          borderTopLeftRadius: "8px",
                          borderTopRightRadius: "8px",
                          backgroundColor: "yellow"
                        }
                      : {}
                  }>{`Phát hiện ${mappingObject(
                  objects.join(" + ")
                )} trong ${time} giây`}</List.Item>
              );
            }}
          />
        ) : (
          <Empty />
        )}
      </Drawer>
      <Modal
        title="Dừng dự đoán"
        centered
        open={openConfirm}
        onOk={() => {
          setOpenConfirm(false);
          Service.restartServer()
            .catch((err) => {})
            .finally(() => {
              toast.success("Dừng dự đoán thành công !");
              setIsPredicting(false);
              setLoading(false);
              setImage("");
            });
        }}
        onCancel={() => {
          setOpenConfirm(false);
        }}>
        <p>Xác nhận dừng dự đoán !</p>
      </Modal>
    </Flex>
  );
};

export default Home;
