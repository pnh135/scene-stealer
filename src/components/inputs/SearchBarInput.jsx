<<<<<<< HEAD
import { useState, useEffect } from "react";
import styled from "styled-components";

const SearchBarInput = () => {
    const [search, setSearch] = useState('');
    const [searchFeedData, setSearchFeedData] = useState([]);

    // 검색어 변경 핸들러
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // 검색어에 따라 필터링된 데이터 생성 (이름 + 태그 검색 가능)
    const filterSearch = searchFeedData.filter((searchInfo) =>
        searchInfo.name.toLowerCase().includes(search.toLowerCase()) || 
        searchInfo.tagsArray.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );

    // 가짜 데이터 가져오기 (API 요청 대신)
    useEffect(() => {
        setSearchFeedData([
            { id: 1, tagsArray: ["임지연", "추영우", "사극", "고전"], name: "옥씨부인전" },
            { id: 2, tagsArray: ["음악", "로맨스", "타임슬립"], name: "말할 수 없는 비밀" },
            { id: 3, tagsArray: ["스릴러", "수녀", "공포"], name: "검은수녀들" },
            { id: 4, tagsArray: ["마블", "히어로", "액션"], name: "Captain America: Brave New World" },
        ]);
    }, []);

    return (
        <div>
            <ul>
                {filterSearch.map((feed) => (
                    <li className="feed" key={feed.id}>
                        <img
                            src={`https://via.placeholder.com/50?text=${feed.name}`}
                            alt={feed.name}
                        />
                        <p>{feed.name}</p>
                        <p>태그: {feed.tagsArray.join(", ")}</p> {/* 태그도 표시 */}
                    </li>
                ))}
            </ul>
            <SearchInputForm action="">
                <SearchInput
                    type="text"
                    name="searchInput"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="검색어를 입력하세요"
                />
            </SearchInputForm>
        </div>
    );
};


const SearchInputForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const SearchInput = styled.input`
    flex: 1;
    height: 40px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 2rem;
    font-size: 16px;
    text-align: center;
`;

export default SearchBarInput;
=======
import { useState } from 'react';

const SearchBarInput = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="검색어를 입력하세요"
        />
      </form>
    </div>
  );
};

export default SearchBarInput;
>>>>>>> dev
