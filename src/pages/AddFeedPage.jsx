import CreateFeedInputs from '../components/inputs/CreateFeedInputs';
import FileInputs from '../components/inputs/FileInputs';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
import { MainPageContent, MainPageMain, MainPageSideBar } from './MainPage';
import SideBar from '../components/SideBar';
import ActionButton, { ActionButtonStyle } from '../components/ActionButton';

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
          <AddFeedContainer>
            <ImgUpLoad>
              <FileInputs />
              {/* supabase로 업로드 받으면 미리보기로 이미지 렌더링 보여주는 창 : supabase 연결 후 구현할 예정 */}
              <img src="" alt="" />
            </ImgUpLoad>
            <AddFeedFormWrapper>
              <CreateFeedInputs />
              <CancelPostButton>
                <ButtonStyle onClick={resetForm}>취소</ButtonStyle>
                <ButtonStyle>게시</ButtonStyle>
              </CancelPostButton>
            </AddFeedFormWrapper>
          </AddFeedContainer>
        </MainPageMain>
      </MainPageContent>
      <MainFooter />
    </div>
  );
};

const AddFeedContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, minmax(300px, auto)); */
  background-color: orange;
  justify-content: center;
`;

const ImgUpLoad = styled.div``;

const AddFeedFormWrapper = styled.div``;

const CancelPostButton = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, auto));
  gap: 20%;
  background-color: palevioletred;
  justify-content: center;
`;

const ButtonStyle = styled(ActionButtonStyle)`
  /* background-color: red;
  color: white;
  width: 100px;
  border-radius: 10px;
  text-align: center; */
`;

export default AddFeedPage;
