import { useState } from 'react';
import supabase from '../supabase/Client';
import { useNavigate } from 'react-router-dom';
import { StdLoginContainer, StdDataInput, StdDataBtn } from '../components/UserDataField';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      alert('로그인 성공!');
      navigate('/main');
    } catch (error) {
      alert(error.message);
      console.error('로그인 오류:', error);
    }
  };

  return (
    <StdLoginContainer onSubmit={login}>
      <StdDataInput
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <StdDataInput
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <StdDataBtn>로그인</StdDataBtn>
    </StdLoginContainer>
  );
};

export default LoginPage;
