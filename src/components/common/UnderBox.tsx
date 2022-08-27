import { ReactElement } from 'react';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

interface UnderBoxProps {
  padding: string;
  children: ReactElement;
}
function UnderBox(props: UnderBoxProps) {
  const { padding, children } = props;
  return <Styled.Root padding={padding}>{children}</Styled.Root>;
}

export default UnderBox;

const Styled = {
  Root: styled.div<{ padding: string }>`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    box-shadow: 0px -6px 24px rgba(0, 0, 0, 0.09);
    border-radius: 20px 20px 0 0;
    padding: ${({ padding }) => padding};
  `,
};
