import { useEffect } from 'react';
import supabase from '../supabase/Client';

const LoginPage = () => {
//연결 확인용 함수
  useEffect(() => {
    const getusers = async () => {
      const a = await supabase.from('users_info').select('*');
      console.log(a);
    };
    getusers();
  }, []);

  return (
    <form>
      <input placeholder="ID"></input>
      <input placeholder="PW"></input>
      <button>로그인</button>
    </form>
  );
};

export default LoginPage;
