import { useRouter } from 'next/router';
import DropUpIC from 'public/ic_arrow_up.svg';
import { useEffect, useState } from 'react';
import ProgressBar from 'src/components/common/ProgressBar';
import UnderBox from 'src/components/common/UnderBox';
import DetailInfo from 'src/components/Recipe/Detail/DetailInfo';
import { client } from 'src/cores/api';
import { ArrowDownAnimation, ArrowUpAnimation } from 'src/styles/animation';
import styled from 'styled-components';

export interface recipeProps {
  imageURL: string;
  writer: string;
  food: string;
  ingredient: string;
  content: string;
}

function RecipeDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [recipe, setRecipe] = useState<recipeProps>();
  const [isLoading, setIsLoading] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();

  const getDetailRecipe = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await client.get(`/recipe/${id}`);
      setRecipe(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const detailId = router.query.id;
    if (typeof detailId === 'string') {
      getDetailRecipe(detailId);
    }
  }, [router.query.id]);

  return (
    <Styled.Root>
      <Styled.ImgWrapper url={recipe?.imageURL || ''} />
      <UnderBox padding={'0 2rem 3rem 2rem'}>
        <>
          <Styled.IconWrapper>
            {isOpen ? <Styled.DownIcon onClick={toggle} /> : <Styled.UpIcon onClick={toggle} />}
          </Styled.IconWrapper>
          <DetailInfo isOpen={isOpen} recipe={recipe} recipeId={router.query.id} />
        </>
      </UnderBox>
      {isLoading && <ProgressBar />}
    </Styled.Root>
  );
}

export default RecipeDetail;

const Styled = {
  Root: styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    ${ArrowDownAnimation}
    ${ArrowUpAnimation}

    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
  `,
  ImgWrapper: styled.div<{ url: string }>`
    display: flex;
    margin-bottom: -2rem;
    flex: 1;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
  `,
  IconWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin: 1.3rem 0;
  `,
  UpIcon: styled(DropUpIC)`
    animation: ArrowUp 0.3s forwards;
  `,
  DownIcon: styled(DropUpIC)`
    animation: ArrowDown 0.3s forwards;
  `,
};
