import LikeIC from 'public/ic_like.svg';
import LikedIC from 'public/ic_liked.svg';
import { useEffect, useState } from 'react';
import { recipeProps } from 'src/pages/recipe/[id]';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

interface DetailInfoProps {
  isOpen: boolean;
  recipe: recipeProps | undefined;
  recipeId: string | string[] | undefined;
}

function DetailInfo({ isOpen, recipe, recipeId }: DetailInfoProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeList, setLikeList] = useState<string[]>([]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked && typeof recipeId === 'string') {
      localStorage.setItem('ccst_liked', JSON.stringify([...likeList, recipeId]));
      setLikeList([...likeList, recipeId]);
    } else if (isLiked && typeof recipeId === 'string') {
      localStorage.setItem('ccst_liked', JSON.stringify(likeList.filter((el) => el !== recipeId)));
      setLikeList(likeList.filter((el) => el !== recipeId));
    }
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('ccst_liked') || '');
    setLikeList(list);
  }, []);

  useEffect(() => {
    if (typeof recipeId === 'string' && likeList.includes(recipeId)) {
      setIsLiked(true);
    }
  }, [likeList, recipeId]);

  return (
    <Styled.Root>
      <Styled.Wrapper>
        <Styled.Header>
          <p className="subTitle">{recipe?.writer}</p>
          <p className="title">
            <span>{recipe?.food}</span>
            요리법을 소개할게요
          </p>
        </Styled.Header>
        {isLiked ? <LikedIC onClick={handleLike} /> : <LikeIC onClick={handleLike} />}
      </Styled.Wrapper>
      <Styled.Main>
        <Styled.Content isOpen={isOpen}>
          <p>재료 소개</p>
          <div>{recipe?.ingredient}</div>
        </Styled.Content>
        <Styled.Content isOpen={isOpen}>
          <p>레시피 소개</p>
          <div className="recipe">{recipe?.content}</div>
        </Styled.Content>
      </Styled.Main>
    </Styled.Root>
  );
}

export default DetailInfo;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Header: styled.div`
    gap: 5rem;

    .subTitle {
      font-size: 1.8rem;
      line-height: 2.2rem;
    }
    .title {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.4rem;
      gap: 0.6rem;
      & > span {
        color: ${theme.colors.main_color};
        margin-right: 0.6rem;
      }
    }
  `,
  Main: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    gap: 2.5rem;
    margin-top: 2rem;
  `,
  Content: styled.div<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    & > p {
      font-size: 1.8rem;
      line-height: 2.1rem;
    }
    & > div {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
    .recipe {
      height: ${({ isOpen }) => (isOpen ? '50vh' : '17rem')};
      overflow: scroll;
      transition: all 1s;
    }
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 2.1rem 1rem;
    border-bottom: 1px solid ${theme.colors.footerGrey};
  `,
};
