import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ActionButtonStyle } from './ActionButton';
import { Search } from 'lucide-react';

const MainHeader = () => {
  return (
    <MainPageHeader>
      <HeaderLogo>
        <Link to="/">
          <img
            src="https://velog.velcdn.com/images/_young/post/dc9091d0-65fa-411a-94d1-3471b80eec5b/image.png"
            alt="logo"
            style={{
              maxWidth: '120px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Link>
      </HeaderLogo>
      <HeaderSearch>
        <Search />
        <input type="text" placeholder="Search" style={{ width: '100%', fontSize: '1rem' }}></input>
      </HeaderSearch>
      <HeaderLogin>
        <Link to="/main/login">
          <ActionButtonStyle>로그인</ActionButtonStyle>
        </Link>
        <Link to="/main/signup">
          <ActionButtonStyle>회원가입</ActionButtonStyle>
        </Link>
      </HeaderLogin>
    </MainPageHeader>
  );
};

const MainPageHeader = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid #bdbdbd;
  background-color: white;
`;

const HeaderLogo = styled.div``;
// 로고 전달 받으면 수정할 수도 있을 것 같아서 남겨둡니다.

const HeaderSearch = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  border-radius: 2rem;
  border: 1px solid #bdbdbd;
  padding: 0.5rem 1rem;
  text-align: left;
`;

const HeaderLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1rem;
`;

export default MainHeader;
