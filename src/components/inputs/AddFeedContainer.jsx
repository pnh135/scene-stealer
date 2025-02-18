import CreateFeedInputs from './CreateFeedInputs';
import FileInputs from './FileInputs';
import styled from 'styled-components';
import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';
import { MainPageContent, MainPageMain, MainPageSideBar } from '../../pages/MainPage';
import SideBar from '../SideBar';
import ActionButton, { ActionButtonStyle } from '../ActionButton';
import { useState } from 'react';
import supabase from '../../supabase/Client';

const AddFeedControl = () => {
  // "취소" 버튼 클릭 시, 새로 고침으로 인해 폼 리셋
  const resetForm = () => window.location.reload();

  const [createFeedInput, setCreateFeedInput] = useState({
    feedTitle: '',
    contentTitle: '',
    tagsArray: [],
    tagInput: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태 추가

  const handleCreateFeedChange = (e) => {
    const { name, value } = e.target;
    setCreateFeedInput((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const addTag = (newTag) => {
    if (!newTag.trim()) return;

    if (createFeedInput.tagsArray.includes(newTag)) {
      setErrorMessage('이미 추가한 태그입니다.'); // 중복 태그 추가 방지
      return;
    }

    if (createFeedInput.tagsArray.length >= 3) {
      setErrorMessage('해시태그는 최대 3개입니다.'); // 태그 개수 제한 메시지
      return;
    }

    setCreateFeedInput((prev) => ({
      ...prev,
      tagsArray: [...prev.tagsArray, newTag],
      tagInput: ''
    }));

    setErrorMessage(''); // 정상 입력 시 에러 메시지 초기화
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(createFeedInput.tagInput);
    }
  };

  const removeTag = (index) => {
    setCreateFeedInput((prev) => ({
      ...prev,
      tagsArray: prev.tagsArray.filter((_, i) => i !== index)
    }));
    setErrorMessage(''); // 태그 삭제 시 에러 메시지도 초기화
  };

  const handleAddFeed = async (e) => {
    e.preventDefault();
    const { data } = await supabase
      .from('news_feeds')
      .upsert(
        { title: createFeedInput.feedTitle },
        { drama_or_movie_title: createFeedInput.contentTitle },
        { category: createFeedInput.tagInput }
      )
      .select();
    console.log(data);
  };

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
              {/* supabase로 업로드 받으면 미리보기로 이미지 렌더링 보여주는 창 : supabase 연결 후 구현할 예정 */}
              <img src="" alt="" />
              <FileInputs />
            </ImgUpLoad>
            <AddFeedFormWrapper>
              <CreateFeedInputs
                createFeedInput={createFeedInput}
                handleCreateFeedChange={handleCreateFeedChange}
                setCreateFeedInput={setCreateFeedInput}
                handleKeyDow={handleKeyDown}
                removeTag={removeTag}
                errorMessage={errorMessage}
              />
              <CancelPostButton>
                <CancelButtonStyle onClick={resetForm}>취소</CancelButtonStyle>
                <PostButtonStyle onClick={handleAddFeed}>게시</PostButtonStyle>
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
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
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

export default AddFeedControl;
