import React from 'react'
import MOCK_DATA from '../data/MOCK_DATA'
import styled from 'styled-components'
import { Heart, MessageCircle, Star } from 'lucide-react';

const FeedList = () => {
  return (
    <FeedListStyledUl>
      {MOCK_DATA.map((Movie)=>(
        <FeedListStyledLi key={Movie.id}>
          <h6>{Movie.korean_name}</h6>
          <img src={Movie.img_url} alt="" />
          <div>
            <Heart />
            <MessageCircle />
            <Star />
          </div>
        </FeedListStyledLi>
      ))}
    </FeedListStyledUl>
  )
}

const FeedListStyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`
const FeedListStyledLi = styled.li`
  ::marker {
  }
  `

export default FeedList