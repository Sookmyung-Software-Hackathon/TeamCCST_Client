import Logo from 'public/titleLogo.svg';
import styled from 'styled-components';

function Header() {
  return (
    <Styled.Root>
      <Logo />
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 3.4rem;
  `,
};
