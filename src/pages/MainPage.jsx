import styled from 'styled-components';
import SideBar from '../components/SideBar';
import MainHeader from '../components/MainHeader';
import FeedList from '../components/FeedList';

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
        <MainPageFooter>Scene Stealer</MainPageFooter>
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

const MainPageContent = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
`;

const MainPageAside = styled.aside`
  border-right: 1px solid #bdbdbd;
`;

const MainPageMain = styled.div`
  flex: 1;
`;

const MainPageFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 30px;
`;

export default MainPage;
