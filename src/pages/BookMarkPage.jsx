import { useState } from 'react';
import { useEffect } from 'react';
import MOCK_DATA from '../data/MOCK_DATA';
import styled from 'styled-components';
import { Heart, MessageCircle, Star } from 'lucide-react';

const BookMarkPage = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmark')) || [];
    setBookmarks(savedBookmarks);
  }, []);

  const RemoveBookMark = (id) => {
    const updatedBookmarks = bookmarks.filter((bo) => bo !== id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmark', JSON.stringify(updatedBookmarks));
  };

  return (
    <div>
      북마크페이지입니다
      <FeedListWrapper>
        {bookmarks.length > 0 ? (
          bookmarks.map((id) => {
            const item = MOCK_DATA.find((li) => li.id === id);
            return item ? (
              <FeedListContent key={id}>
                <FeedListContentTitle>{item.korean_name}</FeedListContentTitle>
                <img src={item.img_url} alt={item.korean_name} />
                <FeedListIcon>
                  <Heart />
                  <MessageCircle />
                  <Star
                    onClick={() => {
                      RemoveBookMark(item.id);
                    }}
                  />
                </FeedListIcon>
              </FeedListContent>
            ) : null;
          })
        ) : (
          <p>북마크를 추가해주세요!</p>
        )}
      </FeedListWrapper>
    </div>
  );
};
const FeedListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

const FeedListContent = styled.div`
  list-style: none;
  width: 12rem;
  border-radius: 1rem;
  background-color: green;
  justify-items: center;
`;

const FeedListContentTitle = styled.p`
  margin: 0.5rem 0;
  padding-left: 0.5rem;
`;

const FeedListIcon = styled.div`
  padding-left: 0.5rem;
`;
export default BookMarkPage;
