import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb, Menu, theme, Input, Typography } from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { fetchTests } from "../api/api";
import Homepage from "./Homepage";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography;

const Essay = () =>{
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const testData = await fetchTests({});
        setData(testData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <>
        <Layout style={{minHeight: "100vh"}}>
            <Navbar/>
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
                        <Searchbar></Searchbar>
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
