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
    <>
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
            </ImgUpLoad>
            <AddFeedFormWrapper>
              <CreateFeedInputs />
              <CancelPostButton>
                <CancelButtonStyle onClick={resetForm}>취소</CancelButtonStyle>
                <PostButtonStyle>게시</PostButtonStyle>
              </CancelPostButton>
            </AddFeedFormWrapper>
          </AddFeedContainer>
        </MainPageMain>
      </MainPageContent>
      <MainFooter />
    </>
  );
};

export const AddFeedContainer = styled.div`
  height: calc(100vh - 262px);
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, auto));
  justify-content: center;
  gap: 5rem;
`;

const ImgUpLoad = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
`;

export const AddFeedFormWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CancelPostButton = styled.div`
  display: flex;
  text-align: center;
  gap: 1rem;
  justify-content: center;
`;

const CancelButtonStyle = styled(ActionButtonStyle)`
  width: 100%;
`;

const PostButtonStyle = styled(ActionButtonStyle)`
  width: 100%;
  &:hover {
    border-color: transparent;
    background-color: yellowgreen;
  }
`;

export default AddFeedPage;
