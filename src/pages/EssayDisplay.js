import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb, Menu, Typography, Input, ConfigProvider} from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { fetchTests } from "../api/api";
import EssayContent from "../components/Essay_Content";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";

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
                <Sidebar></Sidebar>
                <Layout>
                    <div>
                        <EssayContent id={essayID}/>
                    </div>
                </Layout>
            </Layout>
        </ConfigProvider>
        </>
    )
}

export default EssayDisplay
