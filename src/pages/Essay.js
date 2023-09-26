import React, { useState, useEffect } from "react";
import { ConfigProvider, Row, Col } from "antd";
import { fetchTests } from "../api/api";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import HomeBody from "../components/Homebody";

const Essay = () =>{
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const testData = await fetchTests({});
        setData(testData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <ConfigProvider
        theme={{
          token:{
            colorPrimary:"#000000",
        }
        }}>
            
            <section >
                <Navbar/>
            </section>
            <Row>
                <Col xs={1} lg={8}/>
                <Col xs={22} lg={8}>
                    <Searchbar/>
                </Col>
                <Col xs={1} lg={8}/>
            </Row>
        </ConfigProvider>
    )
}

export default Essay
