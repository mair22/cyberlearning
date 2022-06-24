import { Route } from 'react-router-dom'
import Admin from '../components/Admin/Admin';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
const { Header, Sider, Content } = Layout;

export default function AdminTemplate(props) {
        const [collapsed, setCollapsed] = useState(false);
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
            <div className='container'>
        <Layout style={{height:'100vh'}}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "nav 1",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "nav 2",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <props.component {...propsRoute} />
            </Content>
          </Layout>
        </Layout>
      </div>
        //   <>
        //     <Admin {...propsRoute} />
        //     <div>
        //       <props.component {...propsRoute} />
        //     </div>
        //   </>
        );
      }}
    />
  )

}
