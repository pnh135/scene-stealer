import styled from 'styled-components';
import Side from '../components/SideBar';
import MainHeader from '../components/MainHeader';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MOCK_DATA from './MOCK_DATA';

const MainPage = () => {
  const [testList, setTestList] = useState(MOCK_DATA);
  const AddBookMark = (id) => {};
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
              <Side />
            </MainPageAside>
            <MainPageMain>
              {testList.map((li) => {
                return (
                  <StlyeCard key={li.id}>
                    <img src={li.img_url} alt={li.korean_name} />
                    <div>{li.korean_name}</div>
                    <div>{li.description}</div>
                    <button
                      onClick={() => {
                        AddBookMark(li.id);
                      }}
                    >
                      북마크추가
                    </button>
                  </StlyeCard>
                );
              })}
            </MainPageMain>
          </MainPageContent>
          <MainPageFooter>Scene Stealer</MainPageFooter>
        </MainPageWrapper>
      </MainPageContainer>
    </>
  );
};
const StlyeCard = styled.div`
  width: 180px;
  height: 250px;
  border: 10px solid black;
`;
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
