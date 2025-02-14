import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      메인 페이지 영역입니다.
      <button onClick={() => navigate('/')}>버튼</button>
    </>
  );
};

export default MainPage;
