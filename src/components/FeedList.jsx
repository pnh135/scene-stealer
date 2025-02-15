import MOCK_DATA from '../data/MOCK_DATA';
import styled from 'styled-components';
import { Heart, MessageCircle, Star } from 'lucide-react';

const FeedList = () => {
  const addBookMark = (id) => {
    const currentBookmarks = JSON.parse(localStorage.getItem('bookmark')) || [];
    if (!currentBookmarks.includes(id)) {
      currentBookmarks.push(id);
      localStorage.setItem('bookmark', JSON.stringify(currentBookmarks));
    }
  };

  return (
    <FeedListWrapper>
      {MOCK_DATA.map((Movie) => (
        <FeedListContent key={Movie.id}>
          <FeedListContentTitle>{Movie.korean_name}</FeedListContentTitle>
          <img src={Movie.img_url} alt="" />
          <FeedListIcon>
            <Heart />
            <MessageCircle />
            <Star
              onClick={() => {
                addBookMark(Movie.id);
              }}
            />
          </FeedListIcon>
        </FeedListContent>
      ))}
    </FeedListWrapper>
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
`;

const FeedListContentTitle = styled.p`
  margin: 0.5rem 0;
  padding-left: 0.5rem;
`;

const FeedListIcon = styled.div`
  padding-left: 0.5rem;
`;

export default FeedList;
