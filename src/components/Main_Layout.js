import React from 'react';
import { Layout, Col, Row, Divider, Card, Space, ConfigProvider} from 'antd';

//components:
import Navbar from './Navbar.js';
//import Body
//import Footer

//data:
import { fetchData } from '../api/api.js';
import { Content, Footer, Header } from 'antd/es/layout/layout.js';

const MinhLayout = ({ head, body, footer }) => {
    return (
      <>
        <Layout>
            <Header>{head}</Header>
            <Content>{body}</Content>
            <Footer>{footer}</Footer>
        </Layout>
      </>
    );
  };  
  
  export default MinhLayout;