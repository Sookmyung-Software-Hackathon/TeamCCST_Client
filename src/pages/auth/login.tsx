import Image from 'next/image';
import UnderBox from 'src/components/common/UnderBox';
import LoginInputDiv from 'src/components/Login/LoginInputDiv';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function Login() {
  return (
    <Styled.Root>
      <Styled.ImgWrapper>
        <Image src={'/logo.svg'} alt={'로고'} width={170} height={120} />
      </Styled.ImgWrapper>
      <UnderBox padding={'3rem 2rem'}>
        <LoginInputDiv />
      </UnderBox>
    </Styled.Root>
  );
}

export default Login;

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
};
