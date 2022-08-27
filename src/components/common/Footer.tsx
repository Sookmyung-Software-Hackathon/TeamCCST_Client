import Logo from 'public/footerLogo.svg';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function Footer() {
  return (
    <Styled.Root>
      <Logo />
    </Styled.Root>
  );
}

export default Footer;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.6rem 0;
    background-color: ${theme.colors.footerGrey};
  `,
};
