import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ActionButtonStyle } from './ActionButton';

const MainHeader = () => {
  return (
    <MainPageHeader>
      <HeaderLogo>
        <Link to="/">로고</Link> {/* to="/main" 변경해야 함 */}
      </HeaderLogo>
      <HeaderSearch>검색창</HeaderSearch>
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
  background-color: lightcoral;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
`;

const HeaderLogo = styled.div`
  background-color: red;
  flex: 1;
`;

const HeaderSearch = styled.div`
  background-color: lightcyan;
  flex: 9;
`;

const HeaderLogin = styled.div`
  background-color: lightgoldenrodyellow;
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export default MainHeader;
