import UnderBox from 'src/components/common/UnderBox';
import DetailInfo from 'src/components/Recipe/Detail/DetailInfo';
import { DummyDetail } from 'src/constants/dummy';
import styled from 'styled-components';
import DropUpIC from 'public/ic_arrow_up.svg';
import DropDownIC from 'public/ic_arrow_down.svg';
import { useState } from 'react';
import { ArrowDownAnimation, ArrowUpAnimation } from 'src/styles/animation';

function RecipeDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Styled.Root>
      <Styled.ImgWrapper url={DummyDetail.image} />
      <UnderBox padding={'0 2rem 3rem 2rem'}>
        <>
        <Styled.IconWrapper>
          {isOpen?<Styled.DownIcon onClick={toggle}/>:<Styled.UpIcon onClick={toggle}/>}
        </Styled.IconWrapper>
          <DetailInfo isOpen={isOpen}/>
        </>
      </UnderBox>
    </Styled.Root>
  );
}

export default RecipeDetail;

const Styled = {
  Root: styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    ${ArrowDownAnimation}
    ${ArrowUpAnimation}

    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
  `,
  ImgWrapper: styled.div<{ url: string }>`
    display: flex;
    margin-bottom: -2rem;
    flex: 1;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
  `,
  IconWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin: 1.3rem 0;
  `,
  UpIcon: styled(DropUpIC)`
    animation: ArrowUp 0.3s forwards;
  `,
  DownIcon: styled(DropUpIC)`
    animation: ArrowDown 0.3s forwards;
  `
};
