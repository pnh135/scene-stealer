import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Side from './Side';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      메인 페이지 영역입니다.
      <button onClick={() => navigate('/')}>홈페이지로 이동하기</button>
      <HomePageContainer>
        <HomePageWrapper>
          <HomePageHeader>header</HomePageHeader>
          <HomePageContent>
            <HomePageAside>
              <Side />
            </HomePageAside>
            <HomePageMain>main</HomePageMain>
          </HomePageContent>
          <HomePageFooter>footer</HomePageFooter>
        </HomePageWrapper>
      </HomePageContainer>
    </>
  );
};

const HomePageContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePageHeader = styled.header`
  background-color: lightcoral;
`;

const HomePageContent = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightblue;
`;

const HomePageAside = styled.aside`
  background-color: yellowgreen;
  flex: 1;
`;

const HomePageMain = styled.div`
  background-color: orange;
  flex: 10;
`;

const HomePageFooter = styled.footer`
  background-color: gray;
`;

export default MainPage;
