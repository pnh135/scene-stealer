import { useState } from 'react';
import supabase from '../supabase/Client';

const SignUpPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
//값을 수파베이스에 넘기는 함수
const {data,error} = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      user_id: id,
      password,
      name
    }
  }
})
  };

  return (
    <form onSubmit={handleSignUp}>
      <input placeholder="아이디를 입력해 주세요." type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <input
        placeholder="비밀번호를 입력해 주세요."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input placeholder="이름을 입력해 주세요." type="text" value={name} onChange={(e) => setname(e.target.value)} />
      <input
        placeholder="이메일을 입력해 주세요."
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>회원가입</button>
    </form>
  );
};

export default SignUpPage;
