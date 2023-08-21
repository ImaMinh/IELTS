import React from 'react';
import { Layout, Col, Row, Divider, Card, Space, ConfigProvider} from 'antd';

//components:
import Navbar from './Navbar.js';


//data:
import { fetchData } from '../api/api.js';
import { Content, Footer, Header } from 'antd/es/layout/layout.js';
import background from '../assets/ielts_background.png';

const MinhLayout = ({ head, body, footer }) => {
    return (
      <>
        <Layout style={{
          //backgroundImage: `url(${background})` 
          
        }}>
            <Header>{head}</Header>
            <Content>{body}</Content>
            <Footer style={{backgroundColor: "#fff0f6"}}>{footer}</Footer>
        </Layout>
      </>
    );
  };  
  
  export default MinhLayout;