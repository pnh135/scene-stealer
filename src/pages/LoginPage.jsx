import { useEffect } from 'react';
import supabase from '../supabase/Client';

const LoginPage = () => {
//연결 확인용 함수
const login = async () =>{
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })
}

  return (
    <form>
      <input placeholder="email"></input>
      <input placeholder="PW"></input>
      <button>로그인</button>
    </form>
  );
};

export default LoginPage;
