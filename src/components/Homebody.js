import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Card, Divider, Space } from "antd"
import { fetchData } from "../api/api"

const HomeBody = () =>{


    const [data,setData] = useState([]);
    
    useEffect(() => {
        axios.get('/tests').then(({data}) => {
        setData(data);
        });
    }, []);

    return(
        <>
            <Space direction="vertical" size="middle" display="flex">
                <Divider>Introduction</Divider>
                <p>Phần giới thiệu</p>
                <Divider>Essays</Divider>
                <Card title={data[0]?.text}></Card>
            </Space>
        </>
    )
}

export default HomeBody