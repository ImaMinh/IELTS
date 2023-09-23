import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb, Menu, Typography, Input} from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { fetchTests } from "../api/api";
import EssayContent from "../components/Essay_Content";

const { Content, Header, Footer, Sider } = Layout;
const {Text} = Typography;

const EssayDisplay = () =>{
    const {essayID} = useParams();

    return(
        <>
        <Layout hasSider style={{minHeight: "100vh"}}>
            <Sider
                collapsedWidth="0"
                collapsible
                theme="dark"
                defaultCollapsed="true"
                style={{position: "fixed", height: "100vh", top: "0", bottom: "0", zIndex: 1}}
            >
                <div className="demo-logo-vertical" />
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={[
                    {
                        label: <Link to={"/"}>Homepage</Link>,
                        key: "search-bar"
                    }
                ]}

                />
            </Sider>
            <Layout>
                <Header
                style={{
                    padding: 0,
                    background: "white",
                }}
                >
                    <Input placeholder="search essays here"></Input>
                </Header>
                <Content
                style={{
                    margin: '24px 16px 0',
                }}
                >
                    <div>
                        <EssayContent id={essayID}/>
                    </div>
                </Content>
            </Layout>
    </Layout>

    <Layout>
        <Footer
                style={{
                    textAlign: 'center',
                }}
                >
                ZD ©2023 Created by Han Duc Minh
            </Footer>
    </Layout>
    </>
    )
}

export default EssayDisplay
