import { useState } from "react";
import styled from "styled-components";

const PublicInputs = () => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

        
        // 인풋의 value를 가져와서 inputText의 상태를 변경시켜주는 함수
        const handleChangeIdInput = (e) => {
            const userIdValue = e.target.value;
            setUserId(userIdValue);
            console.log(e.target.value)
        };

        const handleChangePwInput = (e) => {
            const userPwValue = e.target.value;
            setUserPw(userPwValue);
            console.log(e.target.value)
        };
        
    

    return (
        <div>
            <LoginInputBox>
            <LoginInputs
            type="text"
            value={userId}
            onChange={handleChangeIdInput}
            placeholder="아이디"
            />
            <LoginInputs
            type="password"
            value={userPw}
            onChange={handleChangePwInput}
            placeholder="비밀번호"
            />
            <LoginButton>로그인</LoginButton>
            </LoginInputBox>


        </div>
    )
};

const LoginInputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    gap: 1rem;
`;

const LoginInputs = styled.input`
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

const LoginButton = styled.button`
    width: 4rem;
`;

export default PublicInputs;