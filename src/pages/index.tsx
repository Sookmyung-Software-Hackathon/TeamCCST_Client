import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from 'src/components/common/Button';
import UnderBox from 'src/components/common/UnderBox';
import useMedia from 'src/hooks/useMedia';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function Home() {
  const { isMobile } = useMedia();
  const [shouldFallback, setShouldFallback] = useState(false);

  useEffect(() => {
    setShouldFallback(isMobile);
  }, [isMobile]);

  return shouldFallback ? (
    <Styled.Root>
      <Styled.ImgWrapper>
        <Image src={'/logo.svg'} alt={'로고'} width={225} height={172} />
      </Styled.ImgWrapper>
      <Styled.Bubble>청춘식탁 시작하기</Styled.Bubble>
      <UnderBox padding={'3rem 3.7rem'}>
        <Styled.ButtonWrapper>
          <Link href="/auth/login" passHref>
            <Button color={theme.colors.main_color} type="button">
              요리법을 공유하고 싶은 시니어라면
            </Button>
          </Link>
          <Link href="/recipe" passHref>
            <Button color={theme.colors.main_color} type="button">
              시니어의 요리법이 궁금하다면
            </Button>
          </Link>
        </Styled.ButtonWrapper>
      </UnderBox>
    </Styled.Root>
  ) : (
    <span>데스크톱메인</span>
  );
}

export default Home;

const Styled = {
  Root: styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    background-color: ${theme.colors.main_color};

    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
  `,
  ImgWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 3rem 0;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.3rem;
  `,
  Bubble: styled.div`
    position: relative;
    width: 18.9rem;
    background-color: white;
    border-radius: 50px;
    text-align: center;
    padding: 0.8rem 0;
    font-size: 1.5rem;
    line-height: 1.8rem;
    top: -3rem;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.07);
    left: 50%;
    transform: translateX(-50%);

    &::after {
      border-top: 1rem solid white;
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
      border-bottom: 0px solid transparent;
      content: '';
      position: absolute;
      bottom: -0.9rem;
      left: 50%;
      transform: translateX(-50%);
    }
  `,
};
