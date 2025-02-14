import { useState } from "react";
import styled from "styled-components";

const PublicInputs = () => {

    // 로그인 [아이디, 비밀번호]
    const [loginInput, setLoginInput] = useState({
        userId: '',
        userPw: '',
    });

    // 회원가입 [이름, 아이디, 비밀번호, 비밀번호 확인]
    const [signupInput, setSignupInput] = useState({
        userName: '',
        userId: '',
        userPw: '',
        userPwConfirm: '',
    });

    // 로그인 오류 메시지
    const [loginErrors, setLoginErrors] = useState({
        userId: '',
        userPw: '',
    });


    // 회원가입 오류 메시지
    const [signupErrors, setSignupErrors] = useState({
        userName: '',
        userId: '',
        userPw: '',
        userPwConfirm: '',
    });


    // 로그인 유효성 검사
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const { userId, userPw } = loginInput;
        let errors = {};

        // 아이디 유효성 (이메일 형식)
        if (!userId.includes('@')) {
            errors.userId = "이메일 형식이 아닙니다."
        }

        // 아이디가 비어있는지 확인
        if (!userId.trim()) {
            errors.userId = "아이디를 입력해주세요."

        }

        // 비밀번호가 비어있는지 확인
        if (!userPw.trim()) {
            errors.userPw = "비밀번호를 입력해주세요.";
        }

        setLoginErrors(errors);
    };

    // 회원가입 유효성 검사
    const handleSignupSubmit = (e) => {
        e.preventDefault();

        const { userName, userId, userPw, userPwConfirm } = signupInput;
        let errors = {};

        // 모든 값이 입력되었는지 확인
        if (!userName.trim() || !userId.trim() || !userPw.trim() || !userPwConfirm.trim()) {
            errors.userName = "모든 입력칸을 채워주세요.";
            errors.userId = "모든 입력칸을 채워주세요.";
            errors.userPw = "모든 입력칸을 채워주세요.";
            errors.userPwConfirm = "모든 입력칸을 채워주세요.";
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

    // 로그인 입력값 관리
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginInput((prev) => ({
            ...prev,
            [name]: value,
        }));
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
            {/* 로그인 */}
            <LoginInputBox onSubmit={handleLoginSubmit}>
                <LoginInputs
                    type="text"
                    name="userId"
                    value={loginInput.userId}
                    onChange={handleLoginChange}
                    placeholder="아이디"
                />
                {loginErrors.userId && <ErrorMessage>{loginErrors.userId}</ErrorMessage>}
                <LoginInputs
                    type="password"
                    name="userPw"
                    value={loginInput.userPw}
                    onChange={handleLoginChange}
                    placeholder="비밀번호"
                />
                {loginErrors.userPw && <ErrorMessage>{loginErrors.userPw}</ErrorMessage>}
                <LoginButton type="submit">로그인</LoginButton>
            </LoginInputBox>

            {/* 회원가입 */}
            <div>
                <SignupInputBox onSubmit={handleSignupSubmit}>
                    <SignupInputs
                        type="text"
                        name="userName"
                        value={signupInput.userName}
                        onChange={handleSignupChange}
                        placeholder="이름"
                    />
                    {signupErrors.userName && <ErrorMessage>{signupErrors.userName}</ErrorMessage>}
                    <LoginInputs
                        type="text"
                        name="userId"
                        value={signupInput.userId}
                        onChange={handleSignupChange}
                        placeholder="아이디"
                    />
                    {signupErrors.userId && <ErrorMessage>{signupErrors.useId}</ErrorMessage>}
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

        </div>
    )
};

const LoginInputBox = styled.form`
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

const SignupInputBox = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    gap: 1rem;
`;

const SignupInputs = styled.input`
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

export default PublicInputs;