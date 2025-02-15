import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../data/MOCK_DATA';
import { Bookmark } from 'lucide-react';

const DetailPage = () => {
  const { id } = useParams();
  const movie = MOCK_DATA.find((p) => p.id === Number(id));

  return (
    <>
      <Link to="/main">뒤로가기</Link>
      <StdFeedContainer className="feed-container">
        <div>
          <StdImageContainer>
            <StdImage src={movie.img_url} />
          </StdImageContainer>
          <StdFeedDetail className="detail">
            <div className="detail-head">
              <StdProfile
                className="icon"
                src="https://i.pinimg.com/736x/a8/7e/e9/a87ee992d0b9e196edf8211bbc799521.jpg"
              />
              <div className="bookmark-icon" />
              <Bookmark />
            </div>
            <div className="hash-tag">
              <span>#해시태그</span>
            </div>
            <div className="star">★★★</div>
            <div className="comment-list">user: 퍼가요~</div>
            <input placeholder="add a comment" />
          </StdFeedDetail>
        </div>
      </StdFeedContainer>
    </>
  );
};

export default DetailPage;

const StdFeedContainer = styled.div`
  display: flex;
  text-align: center;
  max-width: 80%;
  height: 80%;
  justify-content: center;
  flex: 2 1 1;
  background-color: yellow;
`;

const StdFeedDetail = styled.div`
  margin-top: 5%;
  min-width: 50%;
  position: sticky;
  background-color: orange;
  border-radius: 0 5% 5% 0;
`;

const StdProfile = styled.img`
  width: 25px;
  background-image: cover;
`;

const StdImageContainer = styled.div`
  min-width: 50%;
  justify-items: center;
  background-color: green;
  border-radius: 5% 0 0 5%;
`;

const StdImage = styled.img``;
