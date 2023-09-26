import React from "react";
import Anchor from "antd/es/anchor/Anchor";

const Headings = () =>{
    return(
        <Anchor
            affix={true}
            style={{margin:"1.5rem"}}
            items={[
            {
                key: 'Question',
                href: '#question',
                title: 'Question',
            },
            {
                key: 'Outline',
                href: '#outline',
                title: 'Outline',
            },
            {
                key: 'Essay',
                href: '#essay',
                title: 'Essay',
            },
            ]}
        />  
    )
}

export default Headings