import { Col, Row, Image, Pagination, Button, Modal } from "antd";
import React, { useRef } from "react";
import { useEffect, useState, useMemo } from "react";
import Service from "services/main.service";
import { cdnPath } from "utils/utils";
import { UploadOutlined, CloseOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const Data = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [open, setOpen] = useState(false);
  const [imageObject, setImageObject] = useState();
  const [imageLabel, setImageLabel] = useState();

  const inputrRef1 = useRef();
  const inputrRef2 = useRef();

  const items = useMemo(() => {
    const startIndex = pageSize * (page - 1);
    const endIndex = pageSize * page;
    return data?.slice(startIndex, endIndex);
  }, [data, page, pageSize]);

  useEffect(() => {
    Service.getDataSets().then(({ data }) => {
      const classPrefix = "/datasets/class/";
      const imagePrefix = "/datasets/image/";
      const visualPrefix = "/datasets/visual/";

      const classList = data.class_list;
      const visualizationList = data.visualization_list;
      const convertedData = data.image_list?.reduce((acc, image) => {
        const image_name = image.split(`\\`)?.[1]?.split(".")?.[0];

        const matchClass = classList?.find((_) => _.includes(image_name));
        const matchVisual = visualizationList?.find((_) => _.includes(image_name));

        const dataItem = {
          image: imagePrefix + image.split(`\\`)?.[1],
          class: matchClass ? classPrefix + matchClass.split(`\\`)?.[1] : "",
          visual: matchVisual ? visualPrefix + matchVisual.split(`\\`)?.[1] : ""
        };

        return acc.concat(dataItem);
      }, []);
      setData(convertedData?.reverse());
    });
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {items?.map((item, i) => (
          <Col span={12} key={i}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Image
                  src={cdnPath(item.image)}
                  className="radius-10"
                  onLoad={() => {
                    console.log("loading done...");
                  }}
                />
              </Col>
              <Col span={8}>
                <Image src={cdnPath(item.visual)} className="radius-10" />
              </Col>
              <Col span={8}>
                <Image src={cdnPath(item.class)} className="radius-10" />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <Row style={{ position: "sticky", bottom: "0", left: "0" }}>
        <Col span={12}>
          <div className="flex h-full bg-white">
            <Button
              onClick={() => {
                setOpen(true);
              }}
              type="primary">
              Tải ảnh lên
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <Pagination
            className="flex-end sticky-content"
            current={page}
            pageSize={pageSize}
            total={data?.length}
            onChange={(page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }}
          />
        </Col>
      </Row>
      <Modal
        title="Tải dữ liệu huấn luyện"
        centered
        open={open}
        onOk={async () => {
          try {
            if (imageObject && imageLabel) {
              const formData = new FormData();
              formData.append("file_object", imageObject.file);
              formData.append("file_label", imageLabel.file);
              await Service.uploadData(formData);
              toast.success("Tải ảnh lên thành công !");
              setImageObject(null);
              setImageLabel(null);
            } else {
              toast.warning("Vui lòng tải lên đủ tập dữ liệu !");
            }
          } catch (error) {
            toast.error(error.message || "Tải lên file lỗi !");
          }
        }}
        onCancel={() => {
          setImageObject(null);
          setImageLabel(null);
          setOpen(false);
        }}
        okText="Lưu"
        cancelText="Hủy"
        width={1000}>
        <div className="flex-center gap-3 m-2">
          <div>
            <div className="image-placeholder">
              {imageObject ? (
                <>
                  <Image src={imageObject.url} />
                  <Button
                    onClick={() => {
                      setImageObject(null);
                    }}
                    shape="circle"
                    style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1 }}
                    icon={<CloseOutlined />}
                  />
                </>
              ) : (
                <Button
                  icon={<UploadOutlined />}
                  size="large"
                  onClick={() => {
                    inputrRef1?.current.click();
                  }}>
                  Tải lên
                  <input
                    ref={inputrRef1}
                    onChange={(e) => {
                      const file = e.target?.files?.[0];
                      if (!file) {
                        toast.error("Không tìm thấy file !");
                      } else {
                        const url = URL.createObjectURL(file);
                        setImageObject({
                          url: url,
                          file: file
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
              )}
            </div>
            <div className="text-center mt-1">Ảnh gốc</div>
          </div>
          <div>
            <div className="image-placeholder">
              {imageLabel ? (
                <>
                  <Image src={imageLabel.url} />
                  <Button
                    onClick={() => {
                      setImageLabel(null);
                    }}
                    shape="circle"
                    style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1 }}
                    icon={<CloseOutlined />}
                  />
                </>
              ) : (
                <Button
                  icon={<UploadOutlined />}
                  size="large"
                  onClick={() => {
                    inputrRef2?.current.click();
                  }}>
                  Tải lên
                  <input
                    ref={inputrRef2}
                    onChange={(e) => {
                      const file = e.target?.files?.[0];
                      if (!file) {
                        toast.error("Không tìm thấy file !");
                      } else {
                        const url = URL.createObjectURL(file);
                        setImageLabel({
                          url: url,
                          file: file
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
              )}
            </div>
            <div className="text-center mt-1">Ảnh nhãn</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Data;
