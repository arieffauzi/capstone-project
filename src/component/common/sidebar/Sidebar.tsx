"use client";
import React, { useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ISidebar {
  children: React.ReactNode;
}

const { Sider, Header, Content } = Layout;

const SIDEBAR_DATA: MenuProps["items"] = [
  {
    label: <Link href={"/main"}>Home</Link>,
    icon: <HomeOutlined />,
    key: "1",
  },
  {
    label: <Link href={"/main/pelajaran"}>Pelajaran</Link>,
    icon: <InfoCircleOutlined />,
    key: "2",
  },
  {
    label: <Link href={"/main/course"}>Course</Link>,
    icon: <ContactsOutlined />,
    key: "3",
  },
  {
    label: <Link href={"/main/course"}>Setting</Link>,
    icon: <SettingOutlined />,
    key: "4",
    // children: [
    //   { key: '41', label: 'Role' },
    //   { key: '42', label: 'Permission' },
    // ],
  },
];

const Sidebar = (props: ISidebar) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const handleMenuSelect = (href: string) => {
    router.push(href);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapse}>
        <div className="h-16 m-4 bg-slate-400 text-center leading-10 font-bold text-white">
          {collapsed ? "App" : "My App"}
        </div>

        <Menu
          style={{}}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={SIDEBAR_DATA}
        />
      </Sider>

      {/* Main Content */}
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)",
          }}
        >
          <div
            style={{
              paddingLeft: 24,
              fontSize: 18,
              display: "flex",
              alignItems: "center",
            }}
          >
            <button className="text-lg p-0" onClick={toggleCollapse}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
            {/* <span style={{ marginLeft: 16 }}>Dashboard</span> */}
          </div>
        </Header>
        <Content
          style={{ margin: "24px 16px", padding: 24, background: "#fff" }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
