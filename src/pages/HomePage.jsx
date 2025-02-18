import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ActionButtonStyle } from '../components/ActionButton';
import { useEffect, useState } from 'react';
import supabase from '../supabase/Client';

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      console.log(session);
      setIsLogin(session?.user ?? null);
    };
    getSession();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLogin(false);
  };

  return (
    <HomePageWrapper>
      <img
        src="https://velog.velcdn.com/images/_young/post/990fdfd7-0fd6-49f5-8659-0d883f2281f5/image.png"
        alt="Home Page Image"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
      <SingUpPageContainer>
        <Link to="/main">
          <GoMainButton>Main page</GoMainButton>
        </Link>
        {isLogin ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <>
            <Link to="/main/login">
              <ActionButtonStyle>로그인</ActionButtonStyle>
            </Link>
            <Link to="/main/signup">
              <ActionButtonStyle>회원가입</ActionButtonStyle>
            </Link>
          </>
        )}
      </SingUpPageContainer>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const SingUpPageContainer = styled.div`
  width: 30%;
  height: 100vh;
  background-color: white;
  padding: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const GoMainButton = styled(ActionButtonStyle)``;

export default HomePage;
