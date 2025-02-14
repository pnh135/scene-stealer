import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Side from '../components/SideBar';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      메인 페이지 영역입니다.
      <button onClick={() => navigate('/')}>홈페이지로 이동하기</button>
      <MainPageContainer>
        <MainPageWrapper>
          <MainPageHeader>header</MainPageHeader>
          <MainPageContent>
            <MainPageAside>
              <Side />
            </MainPageAside>
            <MainPageMain>main</MainPageMain>
          </MainPageContent>
          <MainPageFooter>footer</MainPageFooter>
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

const MainPageHeader = styled.header`
  background-color: lightcoral;
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
`;

const MainPageFooter = styled.footer`
  background-color: gray;
`;

export default MainPage;
