import Progress from 'public/smallLogo.svg';
import { RotateAnimation } from 'src/styles/animation';
import styled from 'styled-components';

function ProgressBar() {
  return (
    <Styled.Root>
      <Styled.ProgressIC />
    </Styled.Root>
  );
}

export default ProgressBar;

const Styled = {
  Root: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  ProgressIC: styled(Progress)`
    ${RotateAnimation}
    animation: rotation 1s linear infinite;
  `,
};
