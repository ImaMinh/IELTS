import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb, Spin } from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { fetchTest } from "../api/api";
import '../css/homepage.css';
import { Content, Header } from "antd/es/layout/layout";
import Introduction from "./Introduction";

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


    return (
        <div>
            {isLoading ? (
                <Spin /> // Display a loading indicator while fetching data
            ) : (
                <div>
                    {essay ? (
                        <>
                            <h1>{essay.question}</h1>
                            {/*<h3>{essay.text}</h3>*/}
                            {/*<h4>{essay.info}</h4>*/}
                            <p><div dangerouslySetInnerHTML={{ __html: essay.htmlAnswer }} /></p>
                        </>
                    ) : (
                        <p>Essay not found.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default EssayContent
