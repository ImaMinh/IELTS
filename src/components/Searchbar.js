import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Input, Pagination} from "antd";
import { searchTestsByTitle } from "../api/api";
import "../css/searchbar.css"
import HomeBody from "../components/Homebody.js";


let nTimeout = null;
const Searchbar = () => {
  const LIMIT = 10;
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(  {
        results: [],
        page: 1,
        limit: LIMIT,
        totalPages: 1,
        totalResults: 0,
      }
    );
    const [currentPage, setCurrentPage] = useState(1);

    const delaySearch = async ({ keyword, limit = LIMIT, page = 1 } ) => {
      try {
        const results = await searchTestsByTitle( { keyword, limit, page });
        setSearchResults(results);
      } catch (error) {
        console.error('Error searching for tests:', error);
        alert("search error");
      }
    };

    const search = async () => {
      clearTimeout(nTimeout);
      nTimeout = setTimeout(async () => {
        await delaySearch({ keyword: searchTerm, page: currentPage })
      }, 300);
    };

    const handleSearch = async () => {
      const trimmedSearchTerm = searchTerm.trim();

      if (trimmedSearchTerm === '') {
        // If the trimmed search term is empty, clear search results.
        setSearchResults([]);
        return;
      }

      //await search();
    };

    const handlePageChange = (page) =>{
      setCurrentPage(page)
    }

  useEffect(() => {
    if (searchTerm) {
      search();
    }
  }, [currentPage, searchTerm ]);

    return (
      <div className="search-container">
        <Input
          placeholder="Tìm kiếm tại đây"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          // onKeyUp={handleSearch}
        />
        <div className="results-list">
          {
            searchResults.length !== 0 && searchTerm != "" && searchResults.results.map((result) => (
                <div
                  key={result._id}
                >
                  <Link to={`/essay/${result._id}`}>{result.question}</Link>
                </div>
            ))}
        {searchResults.results.length !== 0 && searchTerm !== "" ? (
  <Pagination
    size="small"
    showTotal={(total) => `Total ${total} items`}
    showSizeChanger={false}
    defaultCurrent={currentPage}
    total={searchResults.totalResults}
    pageSize={searchResults.limit}
    onChange={handlePageChange}
  />
) : null}
        </div>
      </div>
    );
  };

  export default Searchbar;
