import Link from 'next/link';
import WriteIC from 'public/ic_write.svg';
import { useEffect, useState } from 'react';
import Footer from 'src/components/common/Footer';
import Header from 'src/components/common/Header';
import ProgressBar from 'src/components/common/ProgressBar';
import Skeleton from 'src/components/common/Skeleton';
import CardList from 'src/components/Recipe/Main/CardList';
import { client } from 'src/cores/api';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function RecipeMain() {
  const [isLogin, setIsLogin] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecipeList = async () => {
    try {
      setIsLoading(true);
      const { data } = await client.get('/recipe');
      setRecipeList(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecipeList();
    const accessToken = localStorage.getItem('ccst_accessToken');
    const isAccess = accessToken?.length ? true : false;
    setIsLogin(isAccess);
  }, []);

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.Root>
        <h1>오늘은 어떤 청춘의 요리를 해볼까요?</h1>
        {isLoading ? <Skeleton /> : <CardList recipeList={recipeList} />}
        {isLogin && (
          <Link href={'/write'} passHref>
            <Styled.Button>
              <WriteIC />
              작성하기
            </Styled.Button>
          </Link>
        )}
      </Styled.Root>
      <Footer />
      {isLoading && <ProgressBar />}
    </Styled.Wrapper>
  );
}

export default RecipeMain;

const Styled = {
  Wrapper: styled.main`
    background-color: ${theme.colors.white};
  `,
  Root: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4.3rem 0;

    & > h1 {
      font-size: 2rem;
      line-height: 120%;
      margin-bottom: 3.5rem;
    }
  `,
  Button: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 9rem;
    height: 9rem;
    background-color: ${theme.colors.main_color};
    border-radius: 50%;
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.6rem;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  `,
};
