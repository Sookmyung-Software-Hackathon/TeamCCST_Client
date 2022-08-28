import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from 'src/components/common/Button';
import ProgressBar from 'src/components/common/ProgressBar';
import UnderBox from 'src/components/common/UnderBox';
import JoinInputDiv from 'src/components/Join/JoinInputDiv';
import SelectNickname from 'src/components/Join/SelectNickname';
import { client } from 'src/cores/api';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function Join() {
  const [isFirst, setIsFirst] = useState(true);
  const [joinInfo, setJoinInfo] = useState({ name: '', password: '', year: '', nickname: '님' });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setIsLoading(true);
      const { data } = await client.post('/auth/signup', {
        ...joinInfo,
        year: parseInt(joinInfo.year),
      });
      localStorage.setItem('ccst_accessToken', data.data.accessToken);
      localStorage.setItem('ccst_name', data.data.name);
      router.push('/recipe');
    } catch (err) {
      throw Error('error!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = (isFirst: boolean) => {
    if (isFirst) {
      setIsFirst(!isFirst);
    } else {
      handleSignup();
    }
  };
  const handleChange = (type: string, value: string) => {
    setJoinInfo((prev) => ({ ...prev, [type]: value }));
  };
  return (
    <Styled.Root>
      <Styled.ImgWrapper>
        <Image src={'/logo.svg'} alt={'로고'} width={170} height={120} />
      </Styled.ImgWrapper>
      <UnderBox padding={'3rem 2rem'}>
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
      {isLoading && <ProgressBar />}
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
