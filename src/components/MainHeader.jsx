import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ActionButtonStyle } from './ActionButton';
import { Search } from 'lucide-react';

const MainHeader = () => {
  return (
    <MainPageHeader>
      <HeaderLogo>
        <Link to="/">
          {/* <img
            src="https://velog.velcdn.com/images/_young/post/dc9091d0-65fa-411a-94d1-3471b80eec5b/image.png"
            alt="logo"
            style={{
              maxWidth: '100px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          /> */}
        </Link>
        {/* to="/main" 변경해야 함 */}
        Scene Stealer
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
  background-color: white;
  display: flex;
  gap: 1.2rem;
  padding: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
`;

const HeaderSearch = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 6;
  border-radius: 2rem;
  border: 1px solid #bdbdbd;
  padding: 0.5rem 1rem;
  text-align: left;
`;

const HeaderLogin = styled.div`
  background-color: lightgoldenrodyellow;
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export default MainHeader;
