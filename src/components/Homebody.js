import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb } from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { fetchTests } from "../api/api";
import '../css/homepage.css';
import { Content, Header } from "antd/es/layout/layout";
import Introduction from "./Introduction";
import cherryVideo from "../assets/cherry_video.mp4";

const HomeBody = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  const cardsPerPage = 9; // Number of cards to display per page

  const isMobile = window.innerWidth <= 780;

  const fetchData = async () => {
    const testData = await fetchTests();
    setData(testData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (page) =>{
    setCurrentPage(page)
  }
  
  //render out cards
  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return (
      <>
        {/*Section for essays */}
        <Row>
        <Col xs={0} sm={0} lg={2}/>

        <Col xs={24} sm={24} lg={20}>
            <Layout  className="essay-wrapper">
                <Header className="essay-wrapper_header">
                    Essays
                </Header>
                <br/>
                <Content>
                    <Breadcrumb
                        align="center"
                        justify="center"
                        style={{
                            marginLeft : "1rem"
                        }}
                        items={[
                        {
                            href: '',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '',
                            title: <UserOutlined />,
                        },
                        {
                            title: 'Essays',
                        },
                        ]}
                    />
                    
                    <br/>

                    <Row gutter={[16, 16]}>
                        {data.slice(startIndex, endIndex).map((x, idx) => (
                            <Col key={idx} xs={24} md={8} lg={8} xl={8}>
                                <Link to={`/essay/${x._id}`}>
                                {/* Card to display */}
                                <Card title={x.title} hoverable={true}>
                                    <div>{x.text}</div>
                                </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Content>
            </Layout>
        </Col>

        <Col xs={0} sm={0} lg={2}/>
        </Row>
      </>
    );
  };

  return (
    <div style={{minHeight: "100vh"}}>  
        <Row>
            <Col span={24}>
                <Introduction/> 
            </Col>
        </Row>
        <br/>
        <br/>

        {/*Essays section*/}
        <Row>
            {renderCards()}
        </Row>

        <br/>
        <br/>
        <Row align="center">
            <Col xs={20} lg={6} justify="center" align="center">
                <div className="blur">
                    <Pagination
                        current={currentPage}
                        defaultPageSize={cardsPerPage}
                        onChange={handlePageChange}
                        total={data.length}
                    />
                </div>
            </Col>
        </Row>
        <br/>
    </div>
  );
};

export default HomeBody;
