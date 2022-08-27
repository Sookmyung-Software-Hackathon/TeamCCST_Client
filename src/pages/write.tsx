import Image from 'next/image';
import TitleLogo from 'public/titleLogo.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import { theme } from 'src/styles/theme';
import { InputProps } from 'src/types/inputType';
import { encodeFileToBase64 } from 'src/utils/encode';
import styled from 'styled-components';

interface IFormInputs {
  name: string;
  ingredients: string;
  recipe: string;
  image: File | null;
}

function Write() {
  // 서버가 요구하는 formdata키 값이랑 이거 이름이랑 통일시켜야함.
  const [formInputs, setFormInputs] = useState<IFormInputs>({
    name: '',
    ingredients: '',
    recipe: '',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState('');

  const handleChange = <T extends keyof typeof formInputs>(
    type: T,
    value: typeof formInputs[T],
  ) => {
    setFormInputs((prevForm) => ({
      ...prevForm,
      [type]: value,
    }));
  };

  const { name, ingredients, recipe } = formInputs;

  const inputDataList: Array<InputProps & { key: number }> = [
    {
      key: 1,
      inputMeta: {
        label: '어떤 요리를 소개하고 싶으신가요?',
        type: 'text',
        placeholder: '예시) 오미자청',
      },
      value: name,
      onChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
        handleChange('name', value),
    },
    {
      key: 2,
      inputMeta: {
        label: '필요한 재료를 입력해주세요.',
        type: 'text',
        placeholder: '예시) 오미자, 설탕, 큰 병',
      },
      value: ingredients,
      onChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
        handleChange('ingredients', value),
    },
    {
      key: 3,
      inputMeta: {
        label: '요리법을 입력해주세요',
        type: 'textarea',
        placeholder: `예시)

오미자를 깨끗하게 씻어요
준비한 병에 오미자와 설탕을 차례로 넣어요.
일주일만 기다리면 맛있는 오미자청이 완성되어요.

사이다에 타먹어도 맛있어요`,
      },
      value: recipe,
      onChange: ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
        handleChange('recipe', value),
    },
  ];

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = e?.target?.files && e.target.files[0];
    if (!image) return;

    const url = await encodeFileToBase64(image);

    setImagePreview(url);
    setFormInputs((prevInput) => ({ ...prevInput, image }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(formInputs).forEach(([key, val]) => {
      formData.append(key, val);
    });
    console.log(formInputs);
    // submit to post;
    // content-type: 'multipart/form-data'
  };

  return (
    <Styled.Container>
      <TitleLogo />
      <Styled.Form onSubmit={handleSubmit}>
        {inputDataList.map(({ key, inputMeta, value, onChange }) => (
          <Input key={key} inputMeta={inputMeta} value={value} onChange={onChange} />
        ))}
        <Styled.InputWrapper>
          <Styled.Label>
            완성된 요리의 사진이 있다면
            <br />
            아래 +를 눌러 추가해주세요
          </Styled.Label>
          {imagePreview ? (
            <Styled.ImagePreview>
              <Image layout="fill" src={imagePreview} alt="image-preview" />
            </Styled.ImagePreview>
          ) : (
            <>
              <input
                onChange={handleFileChange}
                id="image-upload"
                type="file"
                multiple
                accept="image/*"
              />
              <Styled.ImageUploadButton htmlFor="image-upload" />
            </>
          )}
        </Styled.InputWrapper>
        <Button color={theme.colors.main_color} type="submit">
          요리 소개하기
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.main`
    display: flex;
    flex-direction: column;

    padding: 3rem 1.8rem;

    & > svg {
      margin: 0 auto;
    }
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    padding: 4.5rem 0;
    gap: 4.5rem;
  `,
  InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    & > input[type='file'] {
      display: none;
    }
  `,
  Label: styled.label`
    font-size: 1.8rem;
    line-height: 2.2rem;
  `,
  ImageUploadButton: styled.label`
    border: 1px solid #fd892b;
    border-radius: 8px;
    color: #fd892b;
    text-align: center;
    padding: 0.7rem;
    &::after {
      font-size: 3rem;
      content: '+';
    }
  `,
  ImagePreview: styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 18px;
    border: 1px solid #fd892b;

    padding: 0.1rem;

    position: relative;
    overflow: hidden;
  `,
};

export default Write;
