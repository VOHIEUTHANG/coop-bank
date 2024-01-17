import { Col, Row, Image, Pagination, Typography, Tag, Button } from "antd";
import { FILE_TYPE } from "pages/Home/constant";
import React from "react";
import { useEffect, useState, useMemo } from "react";
import Service from "services/main.service";
import { cdnPath } from "utils/utils";
import ReactPlayer from "react-player";
import styled from "styled-components";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const ContainerStyle = styled.div`
  .ant-image {
    width: 100%;
  }
  .ant-row{
    height: 100%:
  }
  .my-image, .my-video{
    max-height: 230px;
    height: 230px;
    object-fit: cover;
  }
`;

const History = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  const items = useMemo(() => {
    const startIndex = pageSize * (page - 1);
    const endIndex = pageSize * page;
    return data?.slice(startIndex, endIndex);
  }, [data, page, pageSize]);

  useEffect(() => {
    Service.getPredictResult().then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <ContainerStyle>
      <Row gutter={[20, 20]}>
        {items?.map((item, i) => (
          <Col span={12} key={i}>
            <div className="flex mb-1">
              <Title level={4} style={{ marginBottom: 0 }} className="text-center">
                {`Dự đoán ngày ${moment(
                  item.created_date,
                  "ddd, DD MMM YYYY HH:mm:ss [GMT]"
                ).format("hh:mm A DD/MM/YYYY")}`}
              </Title>
              {item.type === FILE_TYPE.IMAGE ? (
                <Tag color="green">Hình ảnh</Tag>
              ) : (
                <Tag color="red">Video</Tag>
              )}
              <Button
                type="primary"
                onClick={() => {
                  navigate(`/`, {
                    state: {
                      input_data: {
                        path: item.input,
                        save_path: item.input_save_path,
                        type: item.type
                      }
                    }
                  });
                }}>
                Dự đoán lại
              </Button>
            </div>
            <Row gutter={[16, 16]}>
              {item.type === FILE_TYPE.IMAGE ? (
                <>
                  <Col span={12}>
                    <Image
                      src={cdnPath(item.input)}
                      className="radius-10 my-image"
                      onLoad={() => {
                        console.log("loading done...");
                      }}
                    />
                  </Col>
                  <Col span={12}>
                    <Image
                      src={cdnPath(item.output)}
                      className="radius-10 my-image"
                      onLoad={() => {
                        console.log("loading done...");
                      }}
                    />
                  </Col>
                </>
              ) : (
                <>
                  <Col span={12}>
                    <ReactPlayer
                      width="100%"
                      className="my-video"
                      style={{
                        maxWidth: "100%"
                      }}
                      controls
                      url={cdnPath(item.input)}
                    />
                  </Col>
                  <Col span={12}>
                    <ReactPlayer
                      width="100%"
                      className="my-video"
                      style={{
                        maxWidth: "100%"
                      }}
                      controls
                      url={cdnPath(item.output)}
                    />
                  </Col>
                </>
              )}
            </Row>
          </Col>
        ))}
      </Row>
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
    </ContainerStyle>
  );
};

export default History;
