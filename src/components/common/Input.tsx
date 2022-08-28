import { InputProps } from 'src/types/inputType';
import styled from 'styled-components';

function Input({ inputMeta: { label, type, placeholder }, value, onChange }: InputProps) {
  const inputProps = {
    onChange,
    placeholder,
  };

  return (
    <Styled.InputWrapper>
      <Styled.Label>{label}</Styled.Label>
      {type === 'textarea' ? (
        <Styled.TextArea {...inputProps} value={value} />
      ) : (
        <Styled.Input type={type} {...inputProps} value={value} />
      )}
    </Styled.InputWrapper>
  );
}

export default Input;

const Styled = {
  InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    & > input[type='file'] {
      display: none;
    }
  `,
  Input: styled.input`
    padding: 1.6rem 1.2rem;
    border-radius: 8px;
    border: 1px solid #fd892b;
    outline: 0;

    &::placeholder {
      font-size: 15px;
      line-height: 18px;
      color: #989898;
    }
  `,
  Label: styled.label`
    font-size: 1.8rem;
    line-height: 2.2rem;
  `,
  TextArea: styled.textarea`
    height: 20rem;
    padding: 1.6rem 1.2rem;
    border-radius: 8px;
    border: 1px solid #fd892b;
    resize: none;
    outline: 0;

    &::placeholder {
      font-size: 15px;
      line-height: 18px;
      color: #989898;
    }
  `,
};
