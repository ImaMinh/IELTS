import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Space, Row, Col, Pagination, Layout, Breadcrumb, Input } from "antd";
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { fetchTests, searchTestsByTitle } from "../api/api";
import '../css/homepage.css';
import { Content, Header } from "antd/es/layout/layout";
import Introduction from "./Introduction";
import cherryVideo from "../assets/cherry_video.mp4";
import "../css/navbar.css"

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async () => {
      const trimmedSearchTerm = searchTerm.trim(); // Trim leading and trailing spaces

      if (trimmedSearchTerm === '') {
        // If the trimmed search term is empty, clear search results.
        setSearchResults([]);
        return;
      }
      
      try {
        const results = await searchTestsByTitle(searchTerm);
        setSearchResults(results);
      } catch (error) {
        console.error('Error searching for tests:', error);
      }
    };

    const highlightKeywords = (text) => {
      const keywords = searchTerm.split(/\s+/); // Split search term into keywords
      const regex = new RegExp(`(${keywords.join('|')})`, 'gi'); // Create regex pattern
      return text.replace(regex, '<span class="highlight">$1</span>'); // Wrap keywords in <span> tags for highlighting
    };
  
    return (
      <div>
        <Input
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={handleSearch}
        />
        {/* <button onClick={handleSearch}>Search</button> */}
  
        <ul>
          {searchResults.map((result) => (
            <li
              key={result._id}
              dangerouslySetInnerHTML={{ __html: highlightKeywords(result.text) }}
            />
            
          ))}
        </ul>
      </div>
    );
  };
  
  export default Searchbar;