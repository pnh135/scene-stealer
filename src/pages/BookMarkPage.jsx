import { useState } from 'react';
import { useEffect } from 'react';
import MOCK_DATA from '../data/MOCK_DATA';
import { Heart, MessageCircle, Star } from 'lucide-react';
import { FeedListContent, FeedListContentTitle, FeedListIcon, FeedListWrapper } from '../components/FeedList';

const BookMarkPage = () => {
  const [bookMarks, setbookMarks] = useState([]);

  useEffect(() => {
    const savedbookMarks = JSON.parse(localStorage.getItem('bookmark')) || [];
    setbookMarks(savedbookMarks);
  }, []);

  const RemoveBookMark = (id) => {
    const updatedbookMarks = bookMarks.filter((card) => card !== id);
    alert('북마크에서 제거되었습니다.');
    setbookMarks(updatedbookMarks);
    localStorage.setItem('bookmark', JSON.stringify(updatedbookMarks));
  };

  return (
    <div>
      북마크페이지입니다.
      <FeedListWrapper>
        {bookMarks.length > 0 ? (
          bookMarks.map((id) => {
            const item = MOCK_DATA.find((card) => card.id === id);
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

export default BookMarkPage;
