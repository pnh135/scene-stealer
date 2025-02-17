import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../data/MOCK_DATA';
import { Bookmark, Heart } from 'lucide-react';
import MainHeader from '../components/MainHeader';
import { MainPageContent, MainPageMain, MainPageSideBar } from './MainPage';
import SideBar from '../components/SideBar';
import ActionButton from '../components/ActionButton';
import MainFooter from '../components/MainFooter';
import { AddFeedContainer, AddFeedFormWrapper } from '../components/inputs/AddFeedContainer';

const DetailPage = () => {
  const { id } = useParams();
  const card = MOCK_DATA.find((p) => p.id === Number(id));

  return (
    <>
      <MainHeader />
      <MainPageContent>
        <MainPageSideBar>
          <SideBar />
        </MainPageSideBar>
        <MainPageMain>
          <ActionButton />
          <DetailFeedContainer>
            <DetailFeedImg src={card.img_url} />
            <DetailFeedContent>
              <ProfileIcon>
                <ProfileStyle />
                <BookmarkHeart>
                  <Heart />
                  <Bookmark />
                </BookmarkHeart>
              </ProfileIcon>

              <TitleHashTag>
                <div>{card.korean_name}</div>
                <span>#해시태그</span>
              </TitleHashTag>

              <CommentListStyle>
                <CommentList>user : 퍼가요 ~</CommentList>
                <CommentList>user : 퍼가요 ~</CommentList>
                <CommentList>user : 퍼가요 ~</CommentList>
              </CommentListStyle>

              <CommentInput>
                <input placeholder="댓글을 입력하세요." style={{ width: '100%', height: '30px', margin: '1rem 0' }} />
              </CommentInput>
            </DetailFeedContent>
          </DetailFeedContainer>
        </MainPageMain>
      </MainPageContent>
      <MainFooter />
    </>
  );
};

const DetailFeedContainer = styled(AddFeedContainer)``;

const DetailFeedImg = styled.img`
  width: 320px;
  border-radius: 1rem;
`;

const DetailFeedContent = styled(AddFeedFormWrapper)`
  background-color: #f0f0f0;
  border-radius: 1rem;
  padding: 1rem;
  justify-content: space-around;
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileStyle = styled.img`
  background-color: #bdbdbd;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const BookmarkHeart = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const TitleHashTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
`;

const CommentListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CommentList = styled.div``;

const CommentInput = styled.div`
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
`;

export default DetailPage;
