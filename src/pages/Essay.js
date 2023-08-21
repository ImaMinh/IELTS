import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb, Menu, theme, Input, Typography } from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { fetchTests } from "../api/api";
import Homepage from "./Homepage";
const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography;

const Essay = () =>{
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const testData = await fetchTests();
        setData(testData);
    };

    useEffect(() => {
    fetchData();
    }, []);
    
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
                />
                <Content
                style={{
                    margin: '24px 16px 0',  
                }}
                >   
                    <div>
                        <h1>
                            Search your essays here
                        </h1>
                    </div>
                    <div><Text strong> with more than 1000 essays</Text></div>
                    <div>
                        <Input placeholder="search your essays here"></Input>
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

export default Essay