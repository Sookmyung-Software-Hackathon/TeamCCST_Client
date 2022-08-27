import { theme } from 'src/styles/theme';
import styled from 'styled-components';

interface CardInfoType {
  title: string;
  content: string;
  image: string;
}

interface RecipeCardProps {
  cardInfo: CardInfoType;
}

function RecipeCard(props: RecipeCardProps) {
  const { cardInfo } = props;
  return (
    <Styled.Root>
      <Styled.ImageWrapper>
        <img src={cardInfo.image} />
      </Styled.ImageWrapper>
      <Styled.ContentWrapper>
        <h3>{cardInfo.title}</h3>
        <p>{cardInfo.content}</p>
      </Styled.ContentWrapper>
    </Styled.Root>
  );
}

export default RecipeCard;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
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
};
