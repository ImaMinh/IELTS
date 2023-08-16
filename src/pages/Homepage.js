import React from 'react';
import { ConfigProvider } from 'antd';

//data:
import { fetchData } from '../api/api.js';

//components
import Navbar from '../components/Navbar.js';
import HomeBody from '../components/Homebody.js';
import Footer from '../components/Footer.js';
import MinhLayout from '../components/Main_Layout.js';

const Homepage = () => {
    return (
      <ConfigProvider 
        theme={{
          token:{
            colorPrimary:"#ED4192",
          }
        }}>
        <MinhLayout
          head={<Navbar/>}
          body={<HomeBody/>}
          footer={<Footer/>}
        />
      </ConfigProvider>
    );
  };
  
  export default Homepage;