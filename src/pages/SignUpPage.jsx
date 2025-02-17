import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/Client';
import { StdSignupContainer, StdDataInput, StdDataBtn } from '../components/UserDataField';

const SignUpPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!userId.trim() || !password.trim() || !name.trim() || !email.trim()) {
      return alert('모든 내용을 입력해 주세요.');
    }

    const textComparison = /^[a-z|A-Z|0-9]+$/;

    if (!textComparison.test(userId)) {
      return alert('아이디에는 영어와 숫자만 들어가야 합니다.');
    }

    if (user_info.find(({ user_id }) => user_id === userId)) {
      return alert('이미 존재하는 아이디 입니다.');
    }

    if (password.length < 6) {
      return alert('비밀번호는 6글자 이상 이여야 합니다.');
    }

    const { data: user_info } = await supabase.from('user_info').select('*');

    if (user_info.find((e) => e.email === email)) {
      return alert('이미 존재하는 이메일 입니다.');
    }

    const { error } = await supabase.auth.signUp({
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

    alert('회원가입 완료! 로그인 페이지로 이동합니다!');
    navigate('/main/login');
  };

  return (
    <StdSignupContainer onSubmit={handleSignUp}>
      <StdDataInput
        placeholder="아이디를 입력해 주세요."
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <StdDataInput
        placeholder="비밀번호를 입력해 주세요."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StdDataInput
        placeholder="이름을 입력해 주세요."
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StdDataInput
        placeholder="이메일을 입력해 주세요."
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StdDataBtn>회원가입</StdDataBtn>
    </StdSignupContainer>
  );
};

export default SignUpPage;
