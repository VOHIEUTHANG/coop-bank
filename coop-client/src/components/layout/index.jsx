import React, { useEffect, useRef, useState } from "react";
import { HistoryOutlined, AlertOutlined, DatabaseOutlined, FileOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Avatar } from "antd";
import avatar from "assets/images/logo_ptit.png";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    label: "Dự đoán",
    key: "1",
    icon: <AlertOutlined />,
    route: "/"
  },
  {
    label: "Dữ liệu",
    key: "3",
    icon: <DatabaseOutlined />,
    route: "/data"
  },
  {
    label: "Lịch sử",
    key: "2",
    icon: <HistoryOutlined />,
    route: "/history"
  },
  {
    label: "Mô hình",
    key: "4",
    icon: <FileOutlined />,
    route: "/model"
  }
];

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState(items[0]);
  const [contentHeight, setContentHeight] = useState("100vh");
  const location = useLocation();

  const headerRef = useRef();
  const footerRef = useRef();

  const onItemClick = (item) => {
    const selectedItem = items.find((_) => _.key === item.key);
    navigate(selectedItem?.route ?? "/");
    setSelectedRoute(selectedItem);
  };

  useEffect(() => {
    const selectedItem = items.find((menu) => menu.route === location.pathname);
    setSelectedRoute(selectedItem ?? items[0]);
  }, [location.pathname, items]);

  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight || 0;
    const footerHeight = footerRef.current?.offsetHeight || 0;
    const breadCrumbHeight = 40;
    const currentHeight = headerHeight + footerHeight + breadCrumbHeight;
    setContentHeight(`calc(100vh -  ${currentHeight}px)`);
  }, []);

  const {
    token: { colorBgContainer, colorPrimary, borderRadius }
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh"
      }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="flex-center pt-2 pb-1">
          <Avatar
            style={{ borderRadius: "4px" }}
            shape="square"
            className="bg-white"
            size={64}
            src={avatar}
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[selectedRoute?.key]}
          selectedKeys={selectedRoute.key}
          mode="inline"
          items={items}
          onClick={onItemClick}
        />
      </Sider>
      <Layout>
        <Header
          ref={headerRef}
          style={{
            padding: 0,
            background: colorBgContainer
          }}>
          <div className="m-2">
            <h1
              className="text-center text-xl text-weight-500 uppercase"
              style={{
                lineHeight: "initial"
              }}>
              <span className="text-xl">Đề tài: </span>
              <span style={{ color: colorPrimary }}>Xác định làn đường cho xe tự lái</span>
              <span> - </span>
              <span className="text-l"> Võ Hiếu Thắng - N19DCPT070</span>
            </h1>
          </div>
        </Header>
        <Content
          style={{
            margin: "20px"
          }}>
          <div
            style={{
              padding: "24px 24px 0 24px",
              minHeight: 360,
              height: contentHeight,
              maxHeight: contentHeight,
              overflowX: "hidden",
              overflowY: "auto",
              background: colorBgContainer,
              borderRadius: borderRadius,
              position: "relative"
            }}>
            {children}
          </div>
        </Content>
        <Footer
          ref={footerRef}
          style={{
            textAlign: "center"
          }}>
          ©2023 Created by Vo Hieu Thang
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
