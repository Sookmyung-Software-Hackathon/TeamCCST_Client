import styled from 'styled-components';

import RecipeCard from './RecipeCard';

export interface recipeListEl {
  imageURL: string;
  title: string;
  writerInfo: string;
}
interface recipeListProps {
  recipeList: recipeListEl[];
}

function CardList({ recipeList }: recipeListProps) {
  return (
    <Styled.Root>
      {recipeList.map((el) => (
        <RecipeCard key={el.title} cardInfo={el} />
      ))}
    </Styled.Root>
  );
}

export default CardList;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3.3rem;
  `,
};
