import { useState } from 'react';
import supabase from '../supabase/Client';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const login = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      alert('로그인 성공!');
      useNavigate("/main")
    } catch (error) {
      alert(error.message);
      console.error('로그인 오류:', error);
    }
  };

  return (
    <form onSubmit={login}>
      <input placeholder="email" type="email" value={email} onChange={(e) => setemail(e.target.value)} required />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        required
      />
      <button>로그인</button>
    </form>
  );
};

export default LoginPage;
