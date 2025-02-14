import { useState } from "react";
import styled from "styled-components";

const SignupInputs = () => {


    // 회원가입 [이름, 아이디, 비밀번호, 비밀번호 확인]
    const [signupInput, setSignupInput] = useState({
        userName: '',
        userId: '',
        userPw: '',
        userPwConfirm: '',
    });


    // 회원가입 오류 메시지
    const [signupErrors, setSignupErrors] = useState({
        userName: '',
        userId: '',
        userPw: '',
        userPwConfirm: '',
    });


    // 회원가입 유효성 검사
    const handleSignupSubmit = (e) => {
        e.preventDefault();

        const { userName, userId, userPw, userPwConfirm } = signupInput;
        let errors = {};

        // 모든 값이 입력되었는지 확인
        if (!userName.trim()) {
            errors.userName = "이름을 입력해주세요.";
        }

        if (!userPwConfirm.trim()) {
            errors.userPwConfirm = "비밀번호 확인을 입력해주세요.";
        }

        // 아이디 유효성 (이메일 형식)
        const idRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
        if (!idRegex.test(userId)) {
            errors.userId = "아이디는 이메일 형식인 영문 또는 숫자로 입력해주세요.";
        }

        // 비밀번호 유효성 (7자 이상, 영문과 숫자 포함)
        const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/;
        if (!pwRegex.test(userPw)) {
            errors.userPw = "비밀번호는 7자 이상이며, 영어, 숫자를 포함해야 합니다.";
        }

        // 비밀번호 확인 유효성 (비밀번호와 일치하는지)
        if (userPw !== userPwConfirm) {
            errors.userPwConfirm = "비밀번호가 일치하지 않습니다.";
        }

        setSignupErrors(errors);
    };


    // 회원가입 입력값 관리
    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <div>
            <SignupInputBox onSubmit={handleSignupSubmit}>
                <SignupInput
                    type="text"
                    name="userName"
                    value={signupInput.userName}
                    onChange={handleSignupChange}
                    placeholder="이름"
                />
                {signupErrors.userName && <ErrorMessage>{signupErrors.userName}</ErrorMessage>}
                <SignupInput
                    type="text"
                    name="userId"
                    value={signupInput.userId}
                    onChange={handleSignupChange}
                    placeholder="아이디"
                />
                {signupErrors.userId && <ErrorMessage>{signupErrors.userId}</ErrorMessage>}
                <SignupInputs
                    type="password"
                    name="userPw"
                    value={signupInput.userPw}
                    onChange={handleSignupChange}
                    placeholder="비밀번호"
                />
                {signupErrors.userPw && <ErrorMessage>{signupErrors.userPw}</ErrorMessage>}
                <SignupInputs
                    type="password"
                    name="userPwConfirm"
                    value={signupInput.userPwConfirm}
                    onChange={handleSignupChange}
                    placeholder="비밀번호 확인"
                />
                {signupErrors.userPwConfirm && <ErrorMessage>{signupErrors.userPwConfirm}</ErrorMessage>}
                <SignupButton type="submit">회원가입</SignupButton>
            </SignupInputBox>
        </div>
    )
};


const SignupInputBox = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    gap: 1rem;
`;

const SignupInput = styled.input`
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

const SignupButton = styled.button`
    width: 5rem;
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 0.9rem;
`;

export default SignupInputs;