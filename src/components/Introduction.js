import React from "react";
import { Card, Layout, Typography, Carousel, Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import "../css/homepage.css";
import Meta from "antd/es/card/Meta";

const { Title } = Typography;
const { Content, Header, Footer } = Layout;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};



const Introduction = () => {
  const isMobile = useMediaQuery({ maxWidth: 1221 });

  const commonHeader = (
    <Header
      style={{ height: "10rem", backgroundColor: "white", margin: 0 }}
      justify="center"
      align="center"
    >
      <Title style={{ color: "black" }}>IELTS</Title>
    </Header>
  );

  return (
    <Layout>
      
      <Footer />
    </Layout>
  );
};

export default Introduction;
