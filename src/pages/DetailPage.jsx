import { useLocation, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../data/MOCK_DATA';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = MOCK_DATA.find((p) => p.id === Number(id));

  return (
    <StdFeedContainer className="feed-container">
      <div>
        <StdImage src={movie.img_url} />
      </div>
      <div className="detail">
        <div className="detail-head">
          <StdProfile className="icon" src="https://i.pinimg.com/736x/a8/7e/e9/a87ee992d0b9e196edf8211bbc799521.jpg" />
          <div className="bookmark-icon" />
        </div>
        <div className="hash-tag">
          <span>#해시태그</span>
        </div>
        <div className="star">★★★</div>
        <div className="comment-list">user: 퍼가요~</div>
        <input placeholder="add a comment" />
      </div>
    </StdFeedContainer>
  );
};

export default DetailPage;

const StdFeedContainer = styled.div`
  background-color: yellow;
`;

const StdProfile = styled.img`
  width: 25px;
  background-image: cover;
`;

const StdImage = styled.img`
  width: 50%;
`;
