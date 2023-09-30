import React from "react";
import { ConfigProvider } from 'antd';
import { useParams } from "react-router-dom";
import EssayContent from "../components/Essay_Content";

const EssayDisplay = () =>{
    const {essayID} = useParams();

    return(
        <>
            <ConfigProvider theme={{
                token:{
                    colorPrimary:"#000000",
                }
            }}>
                <div>
                    <EssayContent id={essayID}/>
                </div>
            </ConfigProvider>
        </>
    )
}

export default EssayDisplay
