import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Input, Pagination, Table } from "antd";
import { searchTestsByTitle } from "../api/api";


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

      // await search();
    };

    // keyword có thể trong question hoặc htmlAnswer
    // const highlightKeywords = (result) => {
    //   const { htmlAnswer, question } = result;
    //   const keywords = searchTerm.split(/\s+/); // Split search term into keywords
    //   const regex = new RegExp(`(${keywords.join('|')})`, 'gi'); // Create regex pattern
    //   return htmlAnswer.replace(regex, '<span class="highlight">$1</span>'); // Wrap keywords in <span> tags for highlighting
    // };

    const handlePageChange = (page) =>{
      setCurrentPage(page)
    }

  useEffect(() => {
    if (searchTerm) {
      search();
    } else {
      setSearchResults([]);
    }
  }, [currentPage, searchTerm ]);

    return (
      <div>
        <Input
          placeholder="Tìm kiếm tại đây"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          // onKeyUp={handleSearch}
        />

          {
            searchResults.length !== 0 && searchResults.results.map((result) => (
                <ul
                  key={result._id}
                >
                  <Link to={`/essay/${result._id}`}>{result.question}</Link>
                </ul>
            ))}

        <Pagination
          size="small"
          showTotal={(total) => `Total ${total} items`}
          showSizeChanger={false}

          defaultCurrent={searchResults.page}
          total={searchResults.totalResults}
          pageSize={searchResults.limit}
          onChange={handlePageChange} />
      </div>
    );
  };

  export default Searchbar;
