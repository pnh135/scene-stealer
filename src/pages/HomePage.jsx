import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      홈페이지 영역입니다.
      <button onClick={() => navigate('/main')}>메인페이지로 이동하기</button>
    </>
  );
};

export default HomePage;
