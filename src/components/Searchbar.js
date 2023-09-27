import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Input, Pagination, Popover, Row, Col, Space} from 'antd';
import {searchTestsByTitle} from "../api/api";


const LIMIT = 10;
let nTimeout = null;
const emptySearchResults = {
    results: [],
    page: 1,
    limit: LIMIT,
    totalPages: 1,
    totalResults: 0,
};

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(emptySearchResults);
    const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = useState(false);


    const delaySearch = async ({keyword, limit = LIMIT, page = 1}) => {
        try {
            const results = await searchTestsByTitle({keyword, limit, page});
            setSearchResults(results);
            setOpen(results.results.length > 0);
        } catch (error) {
            console.error('Error searching for tests:', error);
            alert("search error");
        }
    };

    const search = async () => {
        clearTimeout(nTimeout);
        nTimeout = setTimeout(async () => {
            await delaySearch({keyword: searchTerm, page: currentPage})
        }, 300);
    };

    const handleSearch = async () => {
        const trimmedSearchTerm = searchTerm.trim();

        if (trimmedSearchTerm === '') {
            // If the trimmed search term is empty, clear search results.
            setSearchResults(emptySearchResults);
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

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const renderSearchResults = () => {
        return (
            <div>
                <ul className={"results"}>
                    {searchResults.length !== 0 && searchResults.results.map((result, idx) => (
                        <li key={idx}>
                            <Link to={`/essay/${result._id}`}>{result.question}</Link>
                        </li>
                    ))}
                </ul>
                <Pagination
                    size="small"
                    showTotal={(total) => `Total ${total} items`}
                    showSizeChanger={false}

                    defaultCurrent={searchResults.page}
                    total={searchResults.totalResults}
                    pageSize={searchResults.limit}
                    onChange={handlePageChange}/>
            </div>
        )
    }

    const handleOpenChange = (flag) => {
        setOpen(flag && (searchResults.results.length > 0));
    };

    useEffect(() => {
        if (searchTerm) {
            search();
        } else {
            setSearchResults(emptySearchResults);
        }
    }, [currentPage, searchTerm]);

    return (
        <Popover
            content={renderSearchResults()}
            title=""
            trigger="click"
            placement="bottom"
            open={open}
            onOpenChange={handleOpenChange}
            overlayStyle={{
                width: "40vw",
                maxHeight: "800px"
            }}
        >
            <Input
                placeholder="Tìm kiếm tại đây"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </Popover>
    );
};

export default Searchbar;
