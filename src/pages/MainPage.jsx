import styled from 'styled-components';
import SideBar from '../components/SideBar';
import MainHeader from '../components/MainHeader';
import FeedList from '../components/FeedList';
import MainFooter from '../components/MainFooter';

const MainPage = () => {
  return (
    <MainPageWrapper>
      <MainHeader />
      <MainPageContent>
        <SideBar />
        <MainPageMain>
          <FeedList />
        </MainPageMain>
      </MainPageContent>
      <MainFooter />
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.main`
  margin: 0 auto;
  width: 100%;
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const MainPageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding: 20px;
  margin-top: 100px;
  background-color: #e9b0b0;
`;

export const MainPageMain = styled.div`
  flex: 1;
`;

export default MainPage;
