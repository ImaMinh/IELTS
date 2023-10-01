import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Typography } from "antd";
import Headings from "./Anchor";
import "../css/exampleessay.css";

const {Text} = Typography;

const ExampleEssay = () =>{
    const essayData = {
        "_id": "650f0e42c562c7fc0574c970",
        "question": "Childcare has always been of primary concern and importance. Do you think that courses designed to help mothers are necessary or can they acquire the essential knowledge through personal experience? Use specific reasons and examples to support your opinion.",
        "conclusion": "In conclusion, while personal experience is valuable in childcare, courses designed to help mothers are necessary. These courses provide essential knowledge, access to experts, and a supportive community that personal experience alone may not offer. By combining the wisdom gained from personal experience with the structured knowledge and support provided by childcare courses, mothers can become more confident and effective parents.",
        "createdAt": "2023-09-23T23:11:45.662+07:00",
        "htmlAnswer": "<p><strong>Essay:</strong></p><p>Childcare has always been a primary concern for mothers, and the question of whether courses designed to help them are necessary or if they can acquire essential knowledge through personal experience is a complex one. In my view, while personal experience is valuable, courses designed to help mothers with childcare are necessary as they provide essential knowledge and support.</p><p>Personal experience undoubtedly holds value in childcare. Mothers often learn through hands-on parenting, trial-and-error, and the unique bond they develop with their children. These experiences can be enriching and shape a mother's parenting style and intuition over time.</p><p>However, personal experience has its limitations. Relying solely on personal experience may not cover essential aspects of childcare, such as child development theories, safety practices, and evidence-based parenting techniques. Childcare is a complex field that benefits from a solid foundation of knowledge, especially for mothers dealing with various parenting challenges.</p><p>Courses designed to help mothers with childcare offer several crucial benefits. Firstly, they provide structured knowledge, ensuring that mothers are equipped with evidence-based practices and the latest research in child development. Secondly, these courses often offer access to experts in the field, allowing mothers to seek guidance and answers to specific questions. Thirdly, childcare courses create a supportive community where mothers can connect with others facing similar challenges, providing valuable emotional and social support.</p><p>Real-life examples demonstrate the benefits of childcare courses. Consider a mother struggling to manage her child's sleep patterns. Personal experience alone may not provide her with effective strategies to address this challenge. Enrolling in a childcare course could give her access to sleep experts who can offer guidance and support tailored to her child's specific needs.</p><p>In conclusion, while personal experience is valuable in childcare, courses designed to help mothers are necessary. These courses provide essential knowledge, access to experts, and a supportive community that personal experience alone may not offer. By combining the wisdom gained from personal experience with the structured knowledge and support provided by childcare courses, mothers can become more confident and effective parents.</p>",
        "outline": [
          {
            "level": 0,
            "isTitle": 0,
            "type": "heading",
            "outline": "Introduction"
          },
          {
            "level": 0,
            "isTitle": 0,
            "type": "heading",
            "outline": "The Value of Personal Experience"
          },
          {
            "level": 0,
            "isTitle": 0,
            "type": "heading",
            "outline": "The Limitations of Personal Experience"
          },
          {
            "level": 0,
            "isTitle": 0,
            "type": "heading",
            "outline": "The Benefits of Childcare Courses"
          },
          {
            "level": 0,
            "isTitle": 0,
            "type": "heading",
            "outline": "Real-Life Examples"
          },
          {
            "level": 0,
            "isTitle": 0,
            "type": "heading",
            "outline": "Conclusion"
          }
        ],
        "textAnswer": "Essay:Childcare has always been a primary concern for mothers, and the question of whether courses designed to help them are necessary or if they can acquire essential knowledge through personal experience is a complex one. In my view, while personal experience is valuable, courses designed to help mothers with childcare are necessary as they provide essential knowledge and support.Personal experience undoubtedly holds value in childcare. Mothers often learn through hands-on parenting, trial-and-error, and the unique bond they develop with their children. These experiences can be enriching and shape a mother's parenting style and intuition over time.However, personal experience has its limitations. Relying solely on personal experience may not cover essential aspects of childcare, such as child development theories, safety practices, and evidence-based parenting techniques. Childcare is a complex field that benefits from a solid foundation of knowledge, especially for mothers dealing with various parenting challenges.Courses designed to help mothers with childcare offer several crucial benefits. Firstly, they provide structured knowledge, ensuring that mothers are equipped with evidence-based practices and the latest research in child development. Secondly, these courses often offer access to experts in the field, allowing mothers to seek guidance and answers to specific questions. Thirdly, childcare courses create a supportive community where mothers can connect with others facing similar challenges, providing valuable emotional and social support.Real-life examples demonstrate the benefits of childcare courses. Consider a mother struggling to manage her child's sleep patterns. Personal experience alone may not provide her with effective strategies to address this challenge. Enrolling in a childcare course could give her access to sleep experts who can offer guidance and support tailored to her child's specific needs.In conclusion, while personal experience is valuable in childcare, courses designed to help mothers are necessary. These courses provide essential knowledge, access to experts, and a supportive community that personal experience alone may not offer. By combining the wisdom gained from personal experience with the structured knowledge and support provided by childcare courses, mothers can become more confident and effective parents.",
        "textOutline": "",
        "title": "Childcare has always been of primary concern and importance. Do you think that courses designed to help mothers are necessary or can they acquire the essential knowledge through personal experience? Use specific reasons and examples to support your opinion",
        "updatedAt": "2023-09-24T15:13:23.029+07:00"
    }

    const Typewriter = ({ text }) => {
        const [displayText, setDisplayText] = useState("");
        const [currentIndex, setCurrentIndex] = useState(0);
        const [showCursor, setShowCursor] = useState(true);
      
        useEffect(() => {
          if (currentIndex < text.length) {
            const timer = setTimeout(() => {
              setDisplayText((prevText) => prevText + text[currentIndex]);
              setCurrentIndex(currentIndex + 1);
            }, 30); // Adjust the typing speed as needed
            return () => clearTimeout(timer);
          }
        }, [currentIndex, text]);
      
        useEffect(() => {
          // Toggle the cursor every 500 milliseconds
          const cursorInterval = setInterval(() => {
            setShowCursor((prevShowCursor) => !prevShowCursor);
          }, 500);
      
          return () => clearInterval(cursorInterval);
        }, []);
      
        return (
          <div>
            <span>{displayText}</span>
            {showCursor && <span>|</span>}
          </div>
        );
    };
  
    return (
      <>
        <Row style={{paddingTop: "1.5rem", paddingBottom: "1.5rem"}}>
            <Col xs={0} lg={8}/>
            <Col xs={24} lg={8}>
            <div>
                <h1 id="question">Essay mẫu:</h1>
                <h1> <Typewriter text={essayData.question} /></h1>
                <h3 id="outline">Outline:</h3>
                <p>{essayData.outline.map((x)=>(<div>{x.outline}</div>))}</p>
                <div id="essay" dangerouslySetInnerHTML={{ __html: essayData.htmlAnswer }} style={{fontWeight:"light"}}/>
                <Text type="secondary">{essayData.updatedAt}</Text>
            </div>
            </Col>
            <Col xs={0} lg={8} className="rightCol">
                <Headings/>
            </Col>
        </Row>
      </>
    );
}

export default ExampleEssay