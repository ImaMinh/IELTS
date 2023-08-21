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

const CardCarousel = ({ cards }) => {
  return (
    <Carousel autoplay>
      {cards.map((card, index) => (
        <div key={index} style={{ backgroundColor: "transparent" }}>
          <Card
            hoverable
            style={{ width: "100%", height: 176 }}
            cover={<img alt={card.title} src={card.imageUrl} style={{ height: 88 }} />}
          >
            <Meta title={card.title} description={card.description} />
          </Card>
        </div>
      ))}
    </Carousel>
  );
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

  const mobileContent = (
    <Content
      style={{      
        padding: "1.5rem",
        backgroundColor: "white",
        paddingLeft: "20%", // Adjust as needed
        paddingRight: "20%", // Adjust as needed
      }}
    >
      <CardCarousel
        cards={[
          { title: "Card 1", imageUrl: "your-image-url-1.jpg", description: "Description for Card 1" },
          { title: "Card 2", imageUrl: "your-image-url-2.jpg", description: "Description for Card 2" },
          { title: "Card 3", imageUrl: "your-image-url-3.jpg", description: "Description for Card 3" },
        ]}
      />
    </Content>
  );

  const commonContent = (
    <Content
      style={{      
        padding: "1.5rem",
        backgroundColor: "white",
        paddingLeft: "20%", // Adjust as needed
        paddingRight: "20%", // Adjust as needed
      }}
    >
      <Row gutter={[40,40]}>
          <Col>
            <Card>
              <Card.Meta title="card1" description="card1" />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Meta title="card2" description="card1" />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Meta title="card3" description="card1" />
            </Card>
          </Col>
        </Row>
    </Content>
  )

  return (
    <Layout>
      {!isMobile ? (
        <>
          {commonHeader}
          {commonContent}
        </>
      ) : (
        <>
          {commonHeader}
          {mobileContent}
        </>
      )}
      <Footer />
    </Layout>
  );
};

export default Introduction;
