import { useState } from "react";
import styled from "styled-components";

const CreateFeedInputs = () => {
    const [createFeedInput, setCreateFeedInput] = useState({
        feedTitle: "",
        contentTitle: "",
        tagsArray: [],
        tagInput: "",
    });

    const [errorMessage, setErrorMessage] = useState(""); // 🔹 에러 메시지 상태 추가

    const handleCreateFeedChange = (e) => {
        const { name, value } = e.target;
        setCreateFeedInput(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const addTag = (newTag) => {
        if (!newTag.trim()) return;
        if (createFeedInput.tagsArray.includes(newTag)) {
            setErrorMessage("이미 추가한 태그입니다."); //  중복 태그 추가 방지
            return;
        }

        if (createFeedInput.tagsArray.length >= 4) {
            setErrorMessage("해시태그는 최대 4개입니다."); // 태그 개수 제한 메시지
            return;
        }

        setCreateFeedInput(prev => ({
            ...prev,
            tagsArray: [...prev.tagsArray, newTag],
            tagInput: "",
        }));

        setErrorMessage(""); // 정상 입력 시 에러 메시지 초기화
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTag(createFeedInput.tagInput);
        }
    };

    const removeTag = (index) => {
        setCreateFeedInput(prev => ({
            ...prev,
            tagsArray: prev.tagsArray.filter((_, i) => i !== index),
        }));
        setErrorMessage(""); // 태그 삭제 시 에러 메시지도 초기화
    };

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    name="feedTitle"
                    value={createFeedInput.feedTitle}
                    onChange={handleCreateFeedChange}
                    placeholder="제목"
                />

                <input
                    type="text"
                    name="contentTitle"
                    value={createFeedInput.contentTitle}
                    onChange={handleCreateFeedChange}
                    placeholder="드라마 / 영화 이름"
                />

                {/* 태그 입력 인풋 */}
                <TagInputContainer>
                    <TagInput
                        type="text"
                        value={createFeedInput.tagInput}
                        onChange={(e) => setCreateFeedInput(prev => ({
                            ...prev,
                            tagInput: e.target.value,
                        }))}
                        onKeyDown={handleKeyDown}
                        placeholder="해시태그 입력 (최대 4개)"
                    />
                </TagInputContainer>

                {/* 에러 메시지 출력 */}
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

                {/* 태그 리스트 */}
                <TagListContainer>
                    {createFeedInput.tagsArray.map((tag, index) => (
                        <TagItem key={index}>
                            #{tag}
                            <span onClick={() => removeTag(index)}>✖</span>
                        </TagItem>
                    ))}
                </TagListContainer>
            </form>
        </div>
    );
};

/* 입력 필드 스타일 */
const TagInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f0f0f0;
  padding: 0.4rem 1rem;
  border-radius: 0.7rem;
`;

/* 에러 메시지 스타일 */
const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0; /* 입력창과 태그 리스트 사이에 여백 */
`;

/* 태그 리스트 스타일 */
const TagListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 5px;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0.75em;
  border-radius: 20px;
  background-color: #d9d9d9;
  font-size: 14px;

  & > span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(48, 48, 48);
    border-radius: 50%;
    margin-left: 0.3em;
    font-size: 12px;
    color: #fff;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const TagInput = styled.input`
  flex-grow: 1;
  padding: 0.5em;
  background-color: #f0f0f0;
  border: none;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
`;

export default CreateFeedInputs;
