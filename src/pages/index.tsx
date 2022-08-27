import Responsive from 'src/components/Responsive';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function Home() {
  return (
    <Styled.Root>
      <Responsive mobile>
        <span>모바일메인</span>
      </Responsive>
      <Responsive desktop>
        <span>데스크톱메인</span>
      </Responsive>
    </Styled.Root>
  );
}

export default Home;

const Styled = {
  Root: styled.div`
    background-color: ${theme.colors.main_color};
  `,
};
