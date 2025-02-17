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
