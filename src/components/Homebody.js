import React, {useState, useEffect, useMemo} from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb } from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { fetchTests } from "../api/api";
import '../css/homepage.css';
import { Content, Header } from "antd/es/layout/layout";
import Introduction from "./Introduction";

const HomeBody = () => {
  const [data, setData] = useState(  {
      results: [],
      page: 1,
      limit: 10,
      totalPages: 1,
      totalResults: 0,
    }
  );
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  const cardsPerPage = 9; // Number of cards to display per page

  const fetchData = async (page) => {
    const testData = await fetchTests({ limit: cardsPerPage, page });
    setData(testData);
  };

  const handlePageChange = (page) =>{
    setCurrentPage(page)
  }

  //render out cards
  const renderCards = useMemo(() => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return (
      <>
        {/*Section for essays */}
        <Row>
        <Col xs={1} sm={4} lg={2}/>

        <Col xs={22} sm={16} lg={20}>
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
                        {data.results.map((x, idx) => (
                            <Col key={idx} xs={24} md={8} lg={8} xl={8}>
                                <Link to={`/essay/${x.id}`}>
                                {/* Card to display */}
                                <Card title={x.title} hoverable={true} headStyle={{}}>
                                  <div>{x.conclusion.substring(0,200)+"..."}</div>
                                </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Content>
            </Layout>
        </Col>

        <Col xs={1} sm={4} lg={2}/>
        </Row>
      </>
    );
  }, [data]);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

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
            {renderCards}
        </Row>

        <br/>
        <br/>
        <Row align="center">
            <Col xs={20} lg={6} justify="center" align="center">
                <div className="blur">
                    <Pagination
                      size="small"
                      showTotal={(total) => `Total ${total} items`}
                      showSizeChanger={false}

                      defaultCurrent={data.page}
                      total={data.totalResults}
                      pageSize={data.limit}
                      onChange={handlePageChange} />
                </div>
            </Col>
        </Row>
        <br/>
    </div>
  );
};

export default HomeBody;
