import { useNavigate } from 'react-router-dom';
import MOCK_DATA from '../data/MOCK_DATA';
import styled from 'styled-components';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';

const FeedList = () => {
  const navigate = useNavigate();
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
      {MOCK_DATA.map((card) => (
        <FeedListContent key={card.id} onClick={() => navigate(`/main/detail/${card.id}`)}>
          <FeedListContentTitle>{card.korean_name}</FeedListContentTitle>
          <FeedListContentImg src={card.img_url} alt={card.korean_name} />
          <FeedListIcon>
            <Heart style={{ cursor: 'pointer' }} />
            <MessageCircle style={{ cursor: 'pointer' }} />
            <Bookmark
              onClick={(e) => {
                e.stopPropagation();
                addBookMark(card.id);
              }}
              style={{ cursor: 'pointer' }}
            />
          </FeedListIcon>
        </FeedListContent>
      ))}
    </FeedListWrapper>
  );
};

export const FeedListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1rem;
`;

export const FeedListContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #f4f4f4;
  padding: 1.2rem;
  cursor: pointer;
`;

export const FeedListContentTitle = styled.p`
  text-align: left;
  font-weight: bold;
  padding: 0.5rem 0;
  word-break: keep-all;
  border-bottom: 1px solid #bdbdbd;
`;

export const FeedListContentImg = styled.img`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
`;

export const FeedListIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0.7rem 0;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  color: #333;
`;

export default FeedList;
