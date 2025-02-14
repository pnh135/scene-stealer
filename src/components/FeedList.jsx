import React from 'react'
import MOCK_DATA from '../data/MOCK_DATA'
import styled from 'styled-components'

const FeedList = () => {
  return (
    <FeedListStyledUl>
      {MOCK_DATA.map((Movie)=>(
        <li key={Movie.id}>
          <h6>{Movie.korean_name}</h6>
          <img src={Movie.img_url} alt="" />
          <div>
            <img src="" alt="" />
          </div>
        </li>
      ))}
    </FeedListStyledUl>
  )
}

const FeedListStyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export default FeedList