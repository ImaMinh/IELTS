import React, {useState} from "react";
import Searchbar from "./Searchbar";
import "../css/sidebar.css";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`app ${isOpen ? 'open' : ''}`}>
        <button className="toggle-button" onClick={toggleSidebar}>&#9776;</button>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="logo">
            <Searchbar/>
          </div>
          <div>
            <ul>
              <li><a href="/">Trang Chủ</a></li>
              <li><a href="/essay">Essay</a></li>
              <li><a href="/about">Thông tin</a></li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          {/* Nội dung chính của ứng dụng */}
          {/* ... */}
        </div>
      </div>
    );
  }
  
  export default Sidebar;