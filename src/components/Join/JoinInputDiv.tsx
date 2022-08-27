import { ChangeEvent } from 'react';
import { InputProps, joinInfoProps } from 'src/types/inputType';
import styled from 'styled-components';

import Input from '../common/Input';

interface joinInputDivProps {
  joinInfo: joinInfoProps;
  handleChange: (type: string, value: string) => void;
}
function JoinInputDiv(props: joinInputDivProps) {
  const { joinInfo, handleChange } = props;

  const inputDataList: Array<InputProps & { key: number }> = [
    {
      key: 1,
      inputMeta: {
        label: '이름을 입력해주세요',
        type: 'text',
        placeholder: '예시) 오미자',
      },
      value: joinInfo.name,
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
      value: joinInfo.password,
      onChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
        handleChange('password', value),
    },
    {
      key: 3,
      inputMeta: {
        label: '몇년도에 태어나셨나요?',
        type: 'text',
        placeholder: '예시) 1966',
      },
      value: joinInfo.year,
      onChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
        handleChange('year', value),
    },
  ];

  return (
    <Styled.Root>
      <h1>회원가입</h1>
      <Styled.InputWrapper>
        {inputDataList.map(({ key, inputMeta, value, onChange }) => (
          <Input key={key} inputMeta={inputMeta} value={value} onChange={onChange} />
        ))}
      </Styled.InputWrapper>
    </Styled.Root>
  );
}

export default JoinInputDiv;

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
};
