import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb } from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { fetchTests } from "../api/api";
import '../css/homepage.css';
import { Content, Header } from "antd/es/layout/layout";
const HomeBody = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  const cardsPerPage = 9; // Number of cards to display per page

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
                <Header className="essay-wrapper_header" align="center" justify="center">
                    <Breadcrumb
                        align="center"
                        justify="center"
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
                </Header>
                <br/>
                <Content>
                    <Row gutter={[16, 16]}>
                        {data.slice(startIndex, endIndex).map((x, idx) => (
                            <Col key={idx} xs={24} md={8} lg={8} xl={8}>
                                <Link to={"/essay"}>
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
    <>
        <Divider orientation="left" style={{backgroundColor: "white", margin: "0px"}} theme={{
            token:{
                colorSplit: "black",
            }
        }}>
            <p className="divider">Introduction</p>
        </Divider>
        <Row>
          <Col span={24}>
            <p style={{backgroundColor: "white", height: "100%", width: "100%", margin: "0px"}}><h1 style={{margin: "0px"}}>IELTS123</h1></p>
          </Col>
        </Row>
        <Divider orientation="left" style={{backgroundColor: "white", margin: "0px"}}><p className="divider">Essays</p></Divider>
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
    </>
  );
};

export default HomeBody;
