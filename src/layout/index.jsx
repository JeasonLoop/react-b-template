import { useState, Suspense } from 'react'
import { Layout, Menu, Spin } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { HomeOutlined, FundProjectionScreenOutlined, SettingOutlined } from '@ant-design/icons'
import HeaderComponent from './components/Header'
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function Index() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()

  // 侧边栏菜单
  const menuItems = [
    getItem('首页', '/home', <HomeOutlined />),
    getItem('数据展示', '/data', <FundProjectionScreenOutlined />),
    getItem('设置', '/setting', <SettingOutlined />),
  ]

  const onMenuClick = ({ key }) => {
    navigate(key)
  }

  return (
    <Layout style={{ minHeight: "100vh",minWidth:'100vw' }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          // defaultSelectedKeys={[pathname]}
          // defaultOpenKeys={renderOpenKeys()}
          mode="inline"
          items={menuItems}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: "0 10px", background: '#fff' }}>
          <HeaderComponent />
        </Header>
        {/* height：Header和Footer的默认高度是64 */}
        <Content
          style={{
            padding: 16,
            overflow: "auto",
            height: `calc(100vh - 128px)`,
            background:'#f0f2f5',
            // width:'100vw'
          }}
        >
          <Suspense fallback={<Spin size="large" className="content_spin" />}>
            <Outlet />
          </Suspense>
        </Content>
        <Footer style={{ textAlign: "center", width: '100vw' }}>
          react template ©2024 Created by Jeffries
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Index
