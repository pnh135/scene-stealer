import { useEffect, useState } from 'react';
import MOCK_DATA from './MOCK_DATA';

const BookmarksPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(savedBookmarks);
  }, []);
  return (
    <div>
      북마크페이지입니다
      {bookmarks.length > 0 ? (
        bookmarks.map((id) => {
          const item = MOCK_DATA.find((li) => li.id === id);
          return item ? (
            <div key={id}>
              <img src={item.img_url} alt={item.korean_name} />
              <div>{item.korean_name}</div>
              <div>{item.description}</div>
            </div>
          ) : null;
        })
      ) : (
        <p>북마크된 아이템이 없습니다.</p>
      )}
    </div>
  );
};

export default BookmarksPage;
