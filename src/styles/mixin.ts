import { css } from 'styled-components';

export const getBackgroundImageCss = (url: string) => css`
  background-color: transparent;
  background-image: url(${url});
  background-repeat: no-repeat;
  background-size: contain;
`;
