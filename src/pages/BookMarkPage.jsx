import { useState } from 'react';
import { useEffect } from 'react';
import MOCK_DATA from '../data/MOCK_DATA';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';
import {
  FeedListContent,
  FeedListContentImg,
  FeedListContentTitle,
  FeedListIcon,
  FeedListWrapper
} from '../components/FeedList';
import MainHeader from '../components/MainHeader';
import { MainPageContent, MainPageMain, MainPageSideBar } from './MainPage';
import MainFooter from '../components/MainFooter';
import ActionButton from '../components/ActionButton';
import SideBar from '../components/SideBar';
import styled from 'styled-components';

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
    <>
      <MainHeader />
      <MainPageContent>
        <MainPageSideBar>
          <SideBar />
        </MainPageSideBar>
        <MainPageMain>
          <ActionButton />
          <MainFeedList>
            <FeedListWrapper>
              {bookMarks.length > 0 ? (
                bookMarks.map((id) => {
                  const item = MOCK_DATA.find((card) => card.id === id);
                  return item ? (
                    <FeedListContent key={id}>
                      <FeedListContentTitle>{item.korean_name}</FeedListContentTitle>
                      <FeedListContentImg src={item.img_url} alt={item.korean_name} />
                      <FeedListIcon>
                        <Heart style={{ cursor: 'pointer' }} />
                        <MessageCircle style={{ cursor: 'pointer' }} />
                        <Bookmark
                          onClick={() => {
                            RemoveBookMark(item.id);
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </FeedListIcon>
                    </FeedListContent>
                  ) : null;
                })
              ) : (
                <p>북마크를 추가해주세요!</p>
              )}
            </FeedListWrapper>
          </MainFeedList>
        </MainPageMain>
      </MainPageContent>
      <MainFooter />
    </>
  );
};

const MainFeedList = styled.div`
  min-height: calc(100vh - 262px);
`;

export default BookMarkPage;
