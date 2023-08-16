import React, { useState } from 'react';
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Input, Avatar } from 'antd';
import { Link } from 'react-router-dom';

import '../css/navbar.css';

const items = [ 
  {
    label: <Link to={"/"}>Homepage</Link>,
    key: 'homepage',
    icon: <HomeOutlined />,
  },
  {
    label: <Link to={"/essay"}>Essays</Link>,
    key: 'essay',
    icon: <HomeOutlined />,
  },
  {
    label: <Avatar icon={<UserOutlined/>} size={"large"}/>,
    key: 'user',
  }
];
const Navbar = () => {
  const [current, setCurrent] = useState('homepage');
 
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return( 
    <div className="navbar">
      <div> LOGO </div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{width: "100%"}}/>
    </div>);
};

export default Navbar;