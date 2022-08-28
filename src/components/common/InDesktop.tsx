import Image from 'next/image';
import Logo from 'public/logo.svg';
import QR from 'public/QR.png';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function InDesktop() {
  return (
    <Styled.Root>
      <Logo />
      <h3>휴대폰으로 접속해 주세요!</h3>
      <Styled.ImageWrapper>
        <Image src={QR} alt={'QR코드'} width={200} height={200} />
      </Styled.ImageWrapper>
    </Styled.Root>
  );
}

export default InDesktop;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.colors.main_color};
    gap: 3rem;

    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
    & > h3 {
      font-size: 4rem;
      color: white;
    }
  `,
  ImageWrapper: styled.div`
    border-radius: 30px;
    overflow: hidden;
  `,
};
