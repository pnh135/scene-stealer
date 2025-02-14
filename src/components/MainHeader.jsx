import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = () => {
  return (
    <MainPageHeader>
      <HeaderLogo>
        <Link to="/">로고</Link> {/* to="/main" 변경해야 함 */}
      </HeaderLogo>
      <HeaderSearch>검색창</HeaderSearch>
      <HeaderLogin>
        <HeaderLoginSignIn>로그인</HeaderLoginSignIn>
        <HeaderLoginSignUp>회원가입</HeaderLoginSignUp>
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
  padding: 10px;
`;

const HeaderLogo = styled.div`
  background-color: red;
  flex: 1.5;
`;

const HeaderSearch = styled.div`
  background-color: lightcyan;
  flex: 6;
`;

const HeaderLogin = styled.div`
  background-color: lightgoldenrodyellow;
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const HeaderLoginSignIn = styled.div`
  background-color: lightgrey;
`;

const HeaderLoginSignUp = styled.div`
  background-color: lightgreen;
`;

export default MainHeader;
