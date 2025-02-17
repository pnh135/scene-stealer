import { useState } from 'react';
import styled from 'styled-components';

const CreateFeedInputs = () => {
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

  return (
    <>
      <CreatInputsForm action="">
        {/* 기본 입력 인풋 */}
        <AllInputStyle
          type="text"
          name="feedTitle"
          value={createFeedInput.feedTitle}
          onChange={handleCreateFeedChange}
          placeholder="제목을 입력하세요."
        />

        <AllInputStyle
          type="text"
          name="contentTitle"
          value={createFeedInput.contentTitle}
          onChange={handleCreateFeedChange}
          placeholder="드라마 / 영화 제목을 입력하세요."
        />

        {/* 해시태그 입력 인풋 */}
        <AllInputStyle
          type="text"
          value={createFeedInput.tagInput}
          onChange={(e) =>
            setCreateFeedInput((prev) => ({
              ...prev,
              tagInput: e.target.value
            }))
          }
          onKeyDown={handleKeyDown}
          placeholder="해시태그 (최대 3개)"
        />

        {/* 태그 리스트 */}
        <div>
          <TagListContainer>
            {createFeedInput.tagsArray.map((tag, index) => (
              <TagItem key={index}>
                #{tag}
                <span onClick={() => removeTag(index)}>✖</span>
              </TagItem>
            ))}
          </TagListContainer>

          {/* 에러 메시지 출력 */}
          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        </div>
      </CreatInputsForm>
    </>
  );
};

const CreatInputsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const AllInputStyle = styled.input`
  width: 100%;
  background-color: #f0f0f0;
  text-align: left;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  appearance: none;

  &::placeholder {
    color: #333;
  }

  &:focus {
    border-color: black;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 1rem;
`;

const TagListContainer = styled.div`
  display: flex;
  gap: 0.5em;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5em;
  border-radius: 5rem;
  background-color: #d9d9d9;
  font-size: 14px;

  & > span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    border-radius: 50%;
    font-size: 10px;
    color: white;
    text-align: center;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }
`;

export default CreateFeedInputs;
