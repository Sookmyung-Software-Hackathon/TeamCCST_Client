import { theme } from 'src/styles/theme';
import styled from 'styled-components';

interface ButtonProps {
  color: string;
  children: string;
  type: 'button' | 'submit';
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { children, ...buttonProps } = props;
  return <Styled.Button {...buttonProps}>{children}</Styled.Button>;
}

export default Button;

const Styled = {
  Button: styled.button<{ color: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.2rem;
    background-color: ${({ color }) => color};
    color: ${theme.colors.white};
    outline: 0;
    border: 0;
    border-radius: 8px;
    font-size: 1.5rem;
    line-height: 1.8rem;
  `,
};
