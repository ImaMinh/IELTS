import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb, Menu, Typography, Input, ConfigProvider} from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { fetchTests } from "../api/api";
import EssayContent from "../components/Essay_Content";
import Searchbar from "../components/Searchbar";

const { Content, Header, Footer, Sider } = Layout;
const {Text} = Typography;

const EssayDisplay = () =>{
    const { essayID } = useParams();
    console.log("Essay ID:", essayID);
    
    return(
        <>
        <ConfigProvider
            theme={{
                token:{
                colorPrimary:"#000000",
                }
            }}
        >
        <Layout hasSider style={{minHeight: "100vh"}}>
            <Sider
                collapsedWidth="0"
                collapsible
                theme="light"
                defaultCollapsed="true"
                style={{position: "fixed", zIndex: 1, height: "100%"}}
            >
                <Row style={{paddingTop: "1.5rem", paddingBottom: "1.5rem"}}>
                    <Col xs={0} lg={8}/>
                    <Col xs={24} lg={8}></Col>
                        <Searchbar/>
                    <Col xs={0} lg={8}/>
                </Row>
            </Sider>
            <Layout>
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
    </ConfigProvider>
    </>
    )
}

export default EssayDisplay
