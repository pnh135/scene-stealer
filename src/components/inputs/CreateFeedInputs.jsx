import styled from 'styled-components';

const CreateFeedInputs = ({
  createFeedInput,
  handleCreateFeedChange,
  setCreateFeedInput,
  handleKeyDown,
  removeTag,
  errorMessage
}) => {
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
