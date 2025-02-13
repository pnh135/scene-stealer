import styled from "styled-components";

const PublicInputs = () => {
    return (
        <div>
            <LoginInputBox>
            <LoginInputs
            type="text"
            placeholder="아이디"
            />
            <LoginInputs
            type="text"
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