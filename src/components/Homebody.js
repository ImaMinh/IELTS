import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination } from "antd";
import { fetchTests } from "../api/api";
import '../css/homepage.css';
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
        {data.slice(startIndex, endIndex).map((x, idx) => (
          <Col key={idx} span={22} offset={0} lg={{ span: 6, offset: 1 }}>
            <Link to={"/essay"}>
              {/* Card to display */}
              <Card title={x.title} hoverable={true}>
                <div>{x.text}</div>
              </Card>
            </Link>
          </Col>
        ))}
      </>
    );
  };

  return (
    <>
      <Space direction="vertical" size="middle" display="flex">
        <Divider orientation="left">Introduction</Divider>
        <Row>
          <Col>
            <p>Phần giới thiệu</p>
          </Col>
        </Row>
        <Divider orientation="left">Essays</Divider>
        <Row gutter={[0, 16]} justify="center">
            {renderCards()}
        </Row>
        <Row>
            <Col span={24} justify="center" align="center">
                <Pagination
                current={currentPage}
                defaultPageSize={cardsPerPage}
                onChange={handlePageChange}
                total={data.length}
                />
            </Col>
        </Row>
      </Space>
    </>
  );
};

export default HomeBody;
