import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function Skeleton() {
  return (
    <Styled.SkeletonRoot>
      <Styled.Root>
        <Styled.ImageWrapper />
        <Styled.Wrapper>
          <Styled.ContentWrapper />
          <Styled.ContentWrapper />
        </Styled.Wrapper>
      </Styled.Root>
      <Styled.Root>
        <Styled.ImageWrapper />
        <Styled.Wrapper>
          <Styled.ContentWrapper />
          <Styled.ContentWrapper />
        </Styled.Wrapper>
      </Styled.Root>
    </Styled.SkeletonRoot>
  );
}

export default Skeleton;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 0 2rem;
  `,
  SkeletonRoot: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;
  `,
  ContentWrapper: styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    background-color: ${theme.colors.footerGrey};
    border-radius: 8px;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  `,
  ImageWrapper: styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    background-color: ${theme.colors.footerGrey};
    border-radius: 8px;
  `,
};
