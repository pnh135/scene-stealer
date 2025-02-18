import styled from 'styled-components';
import SideBar, { SideBarWrapper } from '../components/SideBar';
import MainHeader from '../components/MainHeader';
import FeedList from '../components/FeedList';
import MainFooter from '../components/MainFooter';

const MainPage = () => {
  return (
    <MainPageWrapper>
      <MainHeader />
      <MainPageContent>
        <MainPageSideBar>
          <SideBar />
        </MainPageSideBar>
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
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`;

export const MainPageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const MainPageSideBar = styled(SideBarWrapper)`
  border-right: 1px solid #bdbdbd;
  padding: 2rem;
`;

export const MainPageMain = styled.div`
  flex: 1;
  padding: 1.5rem;
  min-height: calc(100vh - 156px);
`;

export default MainPage;