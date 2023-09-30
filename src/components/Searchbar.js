import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Input, Pagination, Popover, Row, Col, Space} from 'antd';
import {searchTestsByTitle} from "../api/api";
import "../css/searchbar.css";


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

	const items = [
		{
			key: '1',
			label: (
				<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
					1st menu item
				</a>
			),
		},
		{
			key: '2',
			label: (
				<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
					2nd menu item (disabled)
				</a>
			),
			disabled: true,
		},
		{
			key: '3',
			label: (
				<a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
					3rd menu item (disabled)
				</a>
			),
			disabled: true,
		},
	]


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

	const handlePageChange = (page) => {
		setCurrentPage(page)
	}

	const onChangeTerm = (e) => {
		setSearchTerm(e);
		setCurrentPage(1);
	}

	const isMobile = window.innerWidth < 720;

  const renderSearchResults = () => {
    return (
      <div>
        <ul>
        {searchResults.length !== 0 && searchResults.results.map((result, idx) => (
          <li key={idx} className={"results"}>
            <Link to={`/essay/${result._id}`} className="result-item">{result.question}</Link>
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
          onChange={handlePageChange}
		  current={currentPage}
		  />
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
      title="Kết quả:"
      trigger="click"
      placement="bottom"
      open={open}
      onOpenChange={handleOpenChange}
      overlayStyle={{
        width: isMobile ? "90vw" : "50vw",
        maxHeight: "auto",
      }}
    >
      <Input
        placeholder="Tìm kiếm tại đây"
        value={searchTerm}
        onChange={(e) => onChangeTerm(e.target.value)}
      />
    </Popover>
	);
};

export default Searchbar;