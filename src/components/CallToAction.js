import React from "react";
import { Link } from "react-router-dom";

import "../css/cat.css";

const CAT = () =>{
    return(
        <Link to={"/essay"} className={"link"}> 
            Khám phá ngay ↗
        </Link>
    )
};

export default CAT