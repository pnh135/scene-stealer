import styled from 'styled-components';
import SideBar from '../components/SideBar';
import MainHeader from '../components/MainHeader';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Link to="/">
        <button>홈페이지로 이동하기</button>
      </Link>
      <MainPageContainer>
        <MainPageWrapper>
          <MainHeader />
          <MainPageContent>
            <MainPageAside>
              <SideBar />
            </MainPageAside>
            <MainPageMain>main</MainPageMain>
          </MainPageContent>
          <MainPageFooter>Scene Stealer</MainPageFooter>
        </MainPageWrapper>
      </MainPageContainer>
    </>
  );
};

const MainPageContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightblue;
`;

const MainPageAside = styled.aside`
  background-color: yellowgreen;
  flex: 1;
`;

const MainPageMain = styled.div`
  background-color: orange;
  flex: 10;
  /* height: 100vh; */
`;

const MainPageFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 30px;
`;

export default MainPage;
