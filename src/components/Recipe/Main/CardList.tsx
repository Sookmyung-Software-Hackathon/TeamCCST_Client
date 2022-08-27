import { DummyList } from 'src/constants/dummy';
import styled from 'styled-components';

import RecipeCard from './RecipeCard';

function CardList() {
  return (
    <Styled.Root>
      {DummyList.map((el) => (
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
