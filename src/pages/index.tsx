import Screen from 'src/components/Responsive';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function Home() {
  return (
    <Styled.Root>
      <Screen mobile>
        <span>모바일메인</span>
      </Screen>
      <Screen desktop>
        <span>데스크톱메인</span>
      </Screen>
    </Styled.Root>
  );
}

export default Home;

const Styled = {
  Root: styled.div`
    width: 100%;
    background-color: ${theme.colors.main_color};
  `,
};
