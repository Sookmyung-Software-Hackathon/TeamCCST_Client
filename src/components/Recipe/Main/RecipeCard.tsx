import Link from 'next/link';
import LikeIC from 'public/ic_like.svg';
import LikedIC from 'public/ic_liked.svg';
import { useEffect, useState } from 'react';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

import { recipeListEl } from './CardList';

interface RecipeCardProps {
  cardInfo: recipeListEl;
}

function RecipeCard(props: RecipeCardProps) {
  const { cardInfo } = props;
  const [likeList, setLikeList] = useState<string[]>([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('ccst_liked') || '[]');
    setLikeList(list);
  }, []);

  return (
    <Link href={`/recipe/${cardInfo.id}`} passHref>
      <Styled.Root>
        <Styled.ImageWrapper>
          <img src={cardInfo.imageURL} />
        </Styled.ImageWrapper>
        <Styled.Wrapper>
          <Styled.ContentWrapper>
            <h3>{cardInfo.title}</h3>
            <p>{cardInfo.writerInfo}</p>
          </Styled.ContentWrapper>
          {likeList.includes(`${cardInfo.id}`) ? <LikedIC /> : <LikeIC />}
        </Styled.Wrapper>
      </Styled.Root>
    </Link>
  );
}

export default RecipeCard;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
    cursor: pointer;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.7rem;
    & > h3 {
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 140%;
      color: ${theme.colors.black};
      margin-top: 2rem;
    }

    & > p {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.8rem;
      color: ${theme.colors.grey};
      margin-top: 0.8rem;
    }
  `,
  ImageWrapper: styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    & > img {
      width: 100%;
      border-radius: 10px;
    }
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
  `,
};
