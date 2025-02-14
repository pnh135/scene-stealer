import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      홈페이지 영역입니다.
      <Link to="/main">
        <button>메인페이지로 이동하기</button>
      </Link>
    </>
  );
};

export default HomePage;
