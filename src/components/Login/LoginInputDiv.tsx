import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { client } from 'src/cores/api';
import { theme } from 'src/styles/theme';
import { InputProps } from 'src/types/inputType';
import styled from 'styled-components';

import Button from '../common/Button';
import Input from '../common/Input';

function LoginInputDiv() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({ name: '', password: '' });
  const [isError, setIsError] = useState(false);

  const handleSignin = async () => {
    try {
      const { data } = await client.post('/auth/signin', { ...loginInfo });
      localStorage.setItem('ccst_accessToken', data.data.accessToken);
      localStorage.setItem('ccst_name', data.data.name);
      setIsError(false);
      router.push('/recipe');
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  };

  const handleClick = () => {
    handleSignin();
  };

  const handleChange = (type: string, value: string) => {
    setLoginInfo((prev) => ({ ...prev, [type]: value }));
  };

  const inputDataList: Array<InputProps & { key: number }> = [
    {
      key: 1,
      inputMeta: {
        label: '이름을 입력해주세요',
        type: 'text',
        placeholder: '예시) 오미자',
      },
      value: loginInfo.name,
      onChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
        handleChange('name', value),
    },
    {
      key: 2,
      inputMeta: {
        label: '비밀번호를 입력해주세요',
        type: 'password',
        placeholder: '예시) 6자리 이상 숫자를 입력해 주세요',
      },
      value: loginInfo.password,
      onChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
        handleChange('password', value),
    },
  ];

  return (
    <Styled.Root>
      <h1>로그인</h1>
      <Styled.InputWrapper>
        {inputDataList.map(({ key, inputMeta, value, onChange }) => (
          <Input key={key} inputMeta={inputMeta} value={value} onChange={onChange} />
        ))}
      </Styled.InputWrapper>
      {isError && <Styled.Error>이름 또는 비밀번호가 잘못되었습니다.</Styled.Error>}
      <Styled.ButtonWrapper>
        <Button color={theme.colors.main_color} type="button" onClick={handleClick}>
          요리법 작성하러 가볼까요?
        </Button>
        <Link href="/auth/join" passHref>
          <Button color={theme.colors.black} type="button">
            아직 계정이 없다면 회원가입 하기
          </Button>
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Root>
  );
}

export default LoginInputDiv;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & > h1 {
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.4rem;
      margin-bottom: 4.7rem;
    }
  `,
  InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4.1rem;
    margin-bottom: 4.1rem;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.3rem;
  `,
  Error: styled.p`
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.4rem;
    margin-top: -2.4rem;
    color: ${theme.colors.main_color};
  `,
};
