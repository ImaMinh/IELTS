import { HomeOutlined} from '@ant-design/icons';
import { Menu} from 'antd';
import { Link } from 'react-router-dom';

import '../css/navbar.css';

const items = [ 
  {
    label: <Link to={"/"}>Trang Chủ</Link>,
    icon: <HomeOutlined />,
  },
  {
    label: <Link to={"/essay"}>Essays</Link>,
  },
  {
    label: "Thông Tin",
  }
];
const Navbar = () => {

  return( 
    <div className="navbar">
      <img src="example" className="logo"/>
      <Menu mode="horizontal" items={items} style={{width: "100%"}} theme="light"/>
    </div>
  );
};

export default Navbar;