import MOCK_DATA from '../data/MOCK_DATA';
import styled from 'styled-components';
import { Heart, MessageCircle, Star } from 'lucide-react';

const FeedList = () => {
  const addBookMark = (id) => {
    const currentBookMarks = JSON.parse(localStorage.getItem('bookmark')) || [];

    if (!currentBookMarks.includes(id)) {
      currentBookMarks.push(id);
      alert('북마크에 추가되었습니다.');
      localStorage.setItem('bookmark', JSON.stringify(currentBookMarks));
    } else {
      alert('이미 북마크에 추가되어 있습니다.');
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

export const FeedListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const FeedListContent = styled.div`
  list-style: none;
  width: 12rem;
  border-radius: 1rem;
  background-color: green;
`;

export const FeedListContentTitle = styled.p`
  margin: 0.5rem 0;
  padding-left: 0.5rem;
`;

export const FeedListIcon = styled.div`
  padding-left: 0.5rem;
`;

export default FeedList;
