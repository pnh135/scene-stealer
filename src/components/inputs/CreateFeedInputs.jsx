import { useState } from "react";
import styled from "styled-components";

const CreateFeedInputs = () => {
    const [createFeedInput, setCreateFeedInput] = useState({
        feedTitle: "",
        contentTitle: "",
        tagInput: "",
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

export default CreateFeedInputs;
