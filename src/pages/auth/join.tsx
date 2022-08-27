import Image from 'next/image';
import { useState } from 'react';
import Button from 'src/components/common/Button';
import UnderBox from 'src/components/common/UnderBox';
import JoinInputDiv from 'src/components/Join/JoinInputDiv';
import SelectNickname from 'src/components/Join/SelectNickname';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function Join() {
  const [isFirst, setIsFirst] = useState(true);
  const [joinInfo, setJoinInfo] = useState({ name: '', password: '', year: '', nickname: '님' });
  const handleClick = (isFirst: boolean) => {
    if (isFirst) {
      setIsFirst(!isFirst);
    } else {
      //서버 제출
      console.log(joinInfo);
    }
  };
  const handleChange = (type: string, value: string) => {
    setJoinInfo((prev) => ({ ...prev, [type]: value }));
    console.log(joinInfo);
  };
  return (
    <Styled.Root>
      <Styled.ImgWrapper>
        <Image src={'/logo.svg'} alt={'로고'} width={170} height={120} />
      </Styled.ImgWrapper>
      <UnderBox padding={'3rem 1.8rem'}>
        <>
          {isFirst ? (
            <JoinInputDiv joinInfo={joinInfo} handleChange={handleChange} />
          ) : (
            <SelectNickname
              name={joinInfo.name}
              nickname={joinInfo.nickname}
              handleSelect={handleChange}
            />
          )}
          <Button
            color={theme.colors.main_color}
            type="button"
            onClick={() => handleClick(isFirst)}
          >
            {isFirst ? '다음으로 넘어가 볼까요?' : '회원 가입 완료!'}
          </Button>
        </>
      </UnderBox>
    </Styled.Root>
  );
}

export default Join;

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
