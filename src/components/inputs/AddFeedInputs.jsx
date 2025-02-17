import { useState } from "react";
import styled from "styled-components";

const AddFeedInputs = () => {
    const [createFeedInput, setCreateFeedInput] = useState({
        feedTitle: "",
        contentTitle: "",
        selectCategory: "카테고리 선택",
    });

    // const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태 추가

    const handleCreateFeedChange = (e) => {
        const { name, value } = e.target;
        setCreateFeedInput(prev => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <div>
            <CreatInputsForm action="">
                <AllInput
                    type="text"
                    name="feedTitle"
                    value={createFeedInput.feedTitle}
                    onChange={handleCreateFeedChange}
                    placeholder="제목"
                />
                <AllInput
                    type="text"
                    name="contentTitle"
                    value={createFeedInput.contentTitle}
                    onChange={handleCreateFeedChange}
                    placeholder="드라마 / 영화 이름"
                />
                <SelectBox 
                    name="selectCategory"
                    value={createFeedInput.selectCategory} 
                    onChange={handleCreateFeedChange}
                >
                    <option value="카테고리 선택" disabled>카테고리 선택</option>
                    <option value="드라마">드라마</option>
                    <option value="영화">영화</option>
                    <option value="애니메이션">애니메이션</option>
                    <option value="예능">예능</option>
                    <option value="다큐멘터리">다큐멘터리</option>
                    <option value="기타">기타</option>
                </SelectBox>
            </CreatInputsForm>
        </div>
    );
};



const CreatInputsForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    gap: 1rem;
    
`;


// const ErrorText = styled.p`
//   color: red;
//   font-size: 14px;
//   margin: 5px 0; /* 입력창과 태그 리스트 사이에 여백 */
// `;


const AllInput = styled.input`
    background-color: #f0f0f0;
    width: 10rem;
    padding: 12px 16px;
    border-radius: 11px;
    appearance: none;
    border-style: solid;
    border-width: 2px;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border-color: #7fc1ff;
        outline: none;
    }
`;

const SelectBox = styled.select`
    background-color: #f0f0f0;
    width: 10rem;
    padding: 10px;
    border-radius: 11px;
    border-style: solid;
    border-width: 2px;
    font-size: 16px;

    &:focus {
        border-color: #7fc1ff;
        outline: none;
    }
`;

export default AddFeedInputs;
