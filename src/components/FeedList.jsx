import React from 'react'
import MOCK_DATA from '../data/MOCK_DATA'
import styled from 'styled-components'
import { Heart, MessageCircle, Star } from 'lucide-react';

const FeedList = () => {
  return (
    <FeedListStyledUl>
      {MOCK_DATA.map((Movie)=>(
        <FeedListStyledLi key={Movie.id}>
          <FeedListStyledh6>{Movie.korean_name}</FeedListStyledh6>
          <img src={Movie.img_url} alt="" />
          <FeedListStyleddiv>
            <Heart />
            <MessageCircle />
            <Star />
          </FeedListStyleddiv>
        </FeedListStyledLi>
      ))}
    </FeedListStyledUl>
  )
}

const FeedListStyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`
const FeedListStyledLi = styled.li`
  list-style: none;
  width: 12rem;
  border-radius: 1rem;
  background-color: green;
`
const FeedListStyledh6 = styled.h6`
  margin: 0.5rem 0;
  padding-left: 0.5rem;
`
const FeedListStyleddiv = styled.div`
  padding-left: 0.5rem;
`
export default FeedList