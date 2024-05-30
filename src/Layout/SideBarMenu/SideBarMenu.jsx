import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AlignLeftOutlined,
  InteractionOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const SideBarMenu = ({content}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{marginTop:30,}}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Home Page</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/menu">Menu</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<AlignLeftOutlined />}>
            <Link to="/my-favorites">My Favorites</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<InteractionOutlined />}>
          <Link to="/random-list">Random Meal</Link>

            
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 700,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
            {content}
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBarMenu;
