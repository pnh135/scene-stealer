import { useState } from 'react';
import styled from 'styled-components';

const LoginInputs = () => {
  // 로그인 [아이디, 비밀번호]
  const [loginInput, setLoginInput] = useState({
    userId: '',
    userPw: ''
  });

  // 로그인 오류 메시지
  const [loginErrors, setLoginErrors] = useState({
    userId: '',
    userPw: ''
  });

  // 로그인 유효성 검사
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const { userId, userPw } = loginInput;
    let errors = {};

    // 아이디 유효성 (이메일 형식)
    if (!userId.includes('@')) {
      errors.userId = '이메일 형식이 아닙니다.';
    }

    // 아이디가 비어있는지 확인
    if (!userId.trim()) {
      errors.userId = '아이디를 입력해주세요.';
    }

    // 비밀번호가 비어있는지 확인
    if (!userPw.trim()) {
      errors.userPw = '비밀번호를 입력해주세요.';
    }

    setLoginErrors(errors);
  };

  // 로그인 입력값 관리
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInput((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      {/* 로그인 */}
      <LoginInputForm onSubmit={handleLoginSubmit}>
        <LoginInput
          type="text"
          name="userId"
          value={loginInput.userId}
          onChange={handleLoginChange}
          placeholder="아이디"
        />
        {loginErrors.userId && <ErrorMessage>{loginErrors.userId}</ErrorMessage>}

        <LoginInput
          type="password"
          name="userPw"
          value={loginInput.userPw}
          onChange={handleLoginChange}
          placeholder="비밀번호"
        />
        {loginErrors.userPw && <ErrorMessage>{loginErrors.userPw}</ErrorMessage>}

        <LoginButton type="submit">로그인</LoginButton>
      </LoginInputForm>
    </div>
  );
};

const LoginInputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 1rem;
`;

const LoginInput = styled.input`
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9rem;
`;

export { ErrorMessage };
export default LoginInputs;
