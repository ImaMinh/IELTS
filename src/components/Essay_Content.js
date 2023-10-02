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
    }, [id]);

    function convert2Outline(a) {
        let b = a.filter((x) => x.type == "heading");
        let c = [];
        let oldLevel = 0;
        let aLI = [];
        for (let {level, outline} of b) {
            if (outline.startsWith("-")) {
                outline = outline.split("-")[1].trim();
            }
            if (level != oldLevel && level == 1) {
                aLI = [`<ul>`];
            } else if (level == 1) {
                aLI.push(`<li>${outline}</li>`)
            } else if (oldLevel == 1 && level == 0) {
                aLI.push(`</ul>`);
                c.push(aLI.join("\n"));
                aLI = [];
                c.push(`<div>${outline}</div>`);
            } else if (oldLevel == 0 && level == 0) {
                c.push(`<div>${outline}</div>`);
            }
            oldLevel = level;
        }
    
        if (aLI.length) {
            c.push(aLI.join("\n"));
            aLI = [];
        }
    
        console.log(
            `<div>${c.join("\n")}</div>`
        );
    }

    const isMobile = window.innerWidth < 768;

    return (
        <div>
            {isLoading ? (
                <Spin/>
            ) : (
                <div>
                    {essay ? (
                                <Row style={{paddingTop: "1.5rem", paddingBottom: "1.5rem"}}>
                                    <Col xs={1} md={4} lg={6}/>
                                    <Col xs={22} md={16} lg={12}>
                                    <div>
                                        <h2 id="question">Question:</h2>
                                        <h3> {essay.question}</h3>
                                        <h2 id="outline">Outline:</h2>
                                        <h3>{essay.outline.map((x)=>(<><div>{x.outline}</div></>))}</h3>
                                        <h2 id="essay"> Essay:</h2>
                                        <div dangerouslySetInnerHTML={{ __html: essay.htmlAnswer }}/>
                                        <Text type="secondary">{essay._createdAt}</Text>
                                    </div>
                                    </Col>
                                    <Col xs={1} md={4} lg={6} className="rightCol">
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
