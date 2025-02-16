import { useState } from 'react';
import { useEffect } from 'react';
import supabase from '../supabase/Client';

const SignUpPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return alert('비밀번호는 6글자 이상 이여야 합니다.');
    }

    const textComparison = /^[a-z|A-Z|0-9]+$/;

    if (!textComparison.test(userId)) {
      return alert('아이디에는 영어와 숫자만 들어가야 합니다.');
    }

    const getUserId = async () => {
      const { data, error } = await supabase.from('user_info').select('user_id');
      console.log(data);
    };
    getUserId();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          user_id: userId,
          name,
          email
        }
      }
    });
    if (error) throw error;

    setUserId('');
    setPassword('');
    setEmail('');
    setname('');
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        placeholder="아이디를 입력해 주세요."
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
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
