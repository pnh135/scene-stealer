import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../data/MOCK_DATA';
import { Bookmark } from 'lucide-react';

const DetailPage = () => {
  const { id } = useParams();
  const movie = MOCK_DATA.find((p) => p.id === Number(id));

  return (
    <>
      <Link to="/main">뒤로가기</Link> {/*뒤로가기 아이콘 넣기*/}
      <StdFeedContainer className="feed-container">
        <StdImageContainer>
          <StdImage src={movie.img_url} />
        </StdImageContainer>
        <StdFeedDetail className="detail">
          <StdFeedHeader className="detail-head">
            <StdProfile
              className="icon"
              src="https://i.pinimg.com/736x/a8/7e/e9/a87ee992d0b9e196edf8211bbc799521.jpg"
            />
            <StdBookmark>
              <Bookmark />
            </StdBookmark>
          </StdFeedHeader>
          <div className="hash-tag">
            <span fontSize={'1em'}>#해시태그</span>
          </div>
          <div className="star">★★★</div>
          <ul className="comment-list">
            <li>user: 퍼가요~</li>
            <li>user: 퍼가요~</li>
            <li>user: 퍼가요~</li>
          </ul>
          <input placeholder="add a comment" />
        </StdFeedDetail>
      </StdFeedContainer>
    </>
  );
};

export default DetailPage;

const StdFeedContainer = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(2, minmax(100px, auto));
  gap: 5%;
  max-width: 100%;
  justify-content: center;
  background-color: yellow;
`;

const StdFeedDetail = styled.div`
  display: grid;
  min-width: 40vw;
  min-height: 50%;
  position: relative;
  background-color: orange;
  padding: 5%;
  border-radius: 10%;
`;

const StdProfile = styled.img`
  max-width: 50px;
  max-height: 50px;
  background-image: cover;
  border-radius: 100%;
`;

const StdBookmark = styled.div`
  max-width: 30%;
  max-height: 30%;
`;

const StdImageContainer = styled.div`
  display: flex;
  min-width: 40vw;
  min-height: 50%;
  background-color: green;
  border-radius: 10%;
`;

const StdImage = styled.img`
  width: 100%;
`;

const StdFeedHeader = styled.div`
  display: flex;
  justify-content: center;
  max-height: fit-content;
  flex: 3 1 0;
  gap: 20%;
`;
