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
    label: <Link href={"/main/subject"}>Pelajaran</Link>,
    icon: <InfoCircleOutlined />,
    key: "2",
  },
  {
    label: <Link href={"/main/post-test"}>Post Test</Link>,
    icon: <ContactsOutlined />,
    key: "3",
  },
  {
    label: <Link href={"/main/student"}>Siswa</Link>,
    icon: <ContactsOutlined />,
    key: "4",
  },
  {
    label: <Link href={"/main/teacher"}>Guru</Link>,
    icon: <ContactsOutlined />,
    key: "5",
  },
  //   {
  //     label: <Link href={"/main/course"}>Setting</Link>,
  //     icon: <SettingOutlined />,
  //     key: "6",
  //     children: [
  //       { key: '41', label: 'Role' },
  //       { key: '42', label: 'Permission' },
  //     ],
  //   },
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
        <Header style={{ padding: "16px", background: "white" }}>
          <div className="text-lg flex items-center">
            <button className="text-lg p-0" onClick={toggleCollapse}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
            {/* <span style={{ marginLeft: 16 }}>Dashboard</span> */}
          </div>
        </Header>
        <Content className="p-6 h-screen">{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
