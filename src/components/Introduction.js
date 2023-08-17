import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb, Typography, Avatar, Carousel } from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { fetchTests } from "../api/api";
import '../css/homepage.css';
import { Content, Header, Footer } from "antd/es/layout/layout";
import Meta from "antd/es/card/Meta";

const { Text, Title } = Typography;

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Introduction = () => {
    const isMobile = window.innerWidth <= 780;
    
    if(!isMobile){
        return (
        <Layout>
            <Header
                style={{ height: "13rem", backgroundColor: "white"}}
                justify="center"
                align="center"
            >
            <Title style={{ color: "black", fontSize: "100px", justifyContent: "center", alignContent: "center"}}>TIÊU ĐỀ</Title>
            </Header>
            <Content
                style={{  
                    padding: "1.5rem",
                    backgroundColor: "white",
                    paddingLeft: "20%", // Adjust as needed
                    paddingRight: "20%", // Adjust as needed
                }}
            >
            
                <Row gutter={[40, 40]}>
                    <Col xs={24} sm={24} md={8}>
                        <Card
                            hoverable
                            style={{ width: "100%", }}
                            cover={
                            <img
                                alt="Example"
                                src="your-image-url-1.jpg"
                                style={{ height: 88 }}
                            />
                            }
                        >
                            <Meta title="Giới thiệu về web" description="18/8/2023" />
                            <Content>Giới thiệu web</Content>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Card
                            hoverable
                            style={{ width: "100%"}}
                            cover={
                            <img
                                alt="Example"
                                src="your-image-url-2.jpg"
                                style={{ height: 88 }}
                            />
                            }
                        >
                            <Meta title="Về web" description="18/8/2023" />
                            <Content>Giới thiệu web</Content>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Card
                            hoverable
                            style={{ width: "100%"}}
                            cover={
                            <img
                                alt="Example"
                                src="your-image-url-3.jpg"
                                style={{ height: 88 }}
                            />
                            }
                        >
                            <Meta title="Tác giả web" description="18/8/2023" />
                            <Content>Giới thiệu</Content>
                        </Card>
                    </Col>
                </Row>
            </Content>
            <Footer></Footer>
        </Layout>
        );
    }else{
        return(
            <Layout>
                <Header
                    style={{ height: "10rem", backgroundColor: "white", margin: 0 }}
                    justify="center"
                    align="center"
                >
                    <Title style={{ color: "black" }}>IELTS</Title>
                </Header>
                <Content
                    style={{  
                        padding: "1.5rem",
                        backgroundColor: "white",
                        paddingLeft: "20%", // Adjust as needed
                        paddingRight: "20%", // Adjust as needed
                    }}
                >
                    <Carousel autoplay>
                        <div style={{backgroundColor:"transparent"}}>
                            <Card
                                hoverable
                                style={{ width: "100%", height: 176 }}
                                cover={
                                <img
                                    alt="Example"
                                    src="your-image-url-1.jpg"
                                    style={{ height: 88 }}
                                />
                                }
                            >
                                <Meta title="Card 1" description="Description for Card 1" />
                            </Card>
                        </div>
                        <div style={{backgroundColor:"transparent"}}>
                            <Card
                                hoverable
                                style={{ width: "100%", height: 176 }}
                                cover={
                                <img
                                    alt="Example"
                                    src="your-image-url-2.jpg"
                                    style={{ height: 88 }}
                                />
                                }
                            >
                                <Meta title="Card 2" description="Description for Card 2" />
                            </Card>
                        </div>
                        <div style={{backgroundColor:"transparent"}}>
                            <Card
                                hoverable
                                style={{ width: "100%", height: 176 }}
                                cover={
                                <img
                                    alt="Example"
                                    src="your-image-url-3.jpg"
                                    style={{ height: 88 }}
                                />
                                }
                            >
                                <Meta title="Card 3" description="Description for Card 3" />
                            </Card>
                        </div>
                    </Carousel>                    
                </Content>
                <Footer></Footer>
            </Layout>
        )
    }
  };
  
  export default Introduction;