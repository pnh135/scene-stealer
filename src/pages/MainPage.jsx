import styled from 'styled-components';
import SideBar from '../components/SideBar';
import MainHeader from '../components/MainHeader';
import FeedList from '../components/FeedList';
import MainFooter from '../components/MainFooter';

const MainPage = () => {
  return (
    <MainPageContainer>
      <MainPageWrapper>
        <MainHeader />
        <MainPageContent>
          <MainPageAside>
            <SideBar />
          </MainPageAside>
          <MainPageMain>
            <FeedList />
          </MainPageMain>
        </MainPageContent>
        <MainFooter />
      </MainPageWrapper>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  text-align: center;
`;

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainPageContent = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
`;

export const MainPageAside = styled.aside`
  border-right: 1px solid #bdbdbd;
`;

export const MainPageMain = styled.div`
  flex: 1;
`;

export default MainPage;
