import CreateFeedInputs from '../components/inputs/CreateFeedInputs';
import FileInputs from '../components/inputs/FileInputs';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
import { MainPageContent, MainPageMain, MainPageSideBar } from './MainPage';
import SideBar from '../components/SideBar';
import ActionButton from '../components/ActionButton';

const AddFeedPage = () => {
  // "취소" 버튼 클릭 시, 새로 고침으로 인해 폼 리셋
  const resetForm = () => window.location.reload();

  return (
    <div>
      <MainHeader />
      <MainPageContent>
        <MainPageSideBar>
          <SideBar />
        </MainPageSideBar>
        <MainPageMain>
          <ActionButton />
          <StdInputContainer>
            <div>
              <FileInputs />
              {/* supabase로 업로드 받으면 미리보기로 이미지 렌더링 보여주는 창 
          supabase 연결 후 구현*/}
              <img src="" alt="..." />
            </div>
            <div>
              <CreateFeedInputs />
              <StdBtnWrapper>
                <StdBtn onClick={resetForm}>취소</StdBtn>
                <StdBtn>게시</StdBtn>
              </StdBtnWrapper>
            </div>
          </StdInputContainer>
        </MainPageMain>
      </MainPageContent>
      <MainFooter />
    </div>
  );
};

const StdInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, auto));
  background-color: orange;
  justify-content: center;
`;

const StdBtn = styled.button`
  background-color: red;
  color: white;
  width: 100px;
  border-radius: 10px;
  text-align: center;
`;

const StdBtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, auto));
  gap: 20%;
  background-color: palevioletred;
  justify-content: center;
`;

export default AddFeedPage;
