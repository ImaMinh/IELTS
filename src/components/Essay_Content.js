import React, { useState, useEffect } from "react";
import { Spin, Typography, Row, Col } from "antd";
import { fetchTest } from "../api/api";
import Headings from "./Anchor";
import Navbar from "./Navbar";
import '../css/essaycontent.css';

const Text = Typography;

const EssayContent = ({ id }) =>{
    const [essay, setEssay] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    const fetchData = async () => {
        const essay = await fetchTest(id);
        setEssay(essay);
        setIsLoading(false); // Set loading to false after data is fetched
    };

    useEffect(() => {
        fetchData();
    }, []);

    const isMobile = window.innerWidth < 720;

    return (
        <div>
            {isLoading ? (
                <Spin/>
            ) : (
                <div>
                    {essay ? (
                                <Row style={{paddingTop: "1.5rem", paddingBottom: "1.5rem"}}>
                                    <Col xs={2} lg={6}/>
                                    <Col xs={18} lg={12}>
                                        <div>
                                            <h1 id="question">Đề bài:</h1>
                                            <h1> {essay.question}</h1>
                                            <h3 id="outline">Outline:</h3>
                                            <p>{essay.outline.map((x)=>(<div>{x.outline}</div>))}</p>
                                            <p id="essay"><div dangerouslySetInnerHTML={{ __html: essay.htmlAnswer }}/></p>
                                            <Text type="secondary">{essay.updatedAt}</Text>
                                        </div>
                                    </Col>
                                    <Col xs={4} lg={6} className="rightCol">
                                        {isMobile ? null : (<Headings/>)}
                                    </Col>
                                </Row>
                    ) : (
                        <p> Essay not found.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default EssayContent
