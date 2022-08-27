import { nicknameList } from 'src/constants/nicknameList';
import { theme } from 'src/styles/theme';
import styled, { css } from 'styled-components';

interface SelectNicknameProps {
  name: string;
  nickname: string;
  handleSelect: (type: string, value: string) => void;
}
function SelectNickname(props: SelectNicknameProps) {
  const { name, nickname, handleSelect } = props;
  return (
    <Styled.Root>
      <h1>오미자님을 어떻게 불러드릴까요?</h1>
      <Styled.SelectList>
        {nicknameList.map((el) => (
          <Styled.Item
            key={el}
            isSelected={nickname === el}
            onClick={() => handleSelect('nickname', el)}
          >
            {el}
          </Styled.Item>
        ))}
      </Styled.SelectList>
      <p>{`${name} ${nickname}, 반갑습니다!`}</p>
    </Styled.Root>
  );
}

export default SelectNickname;

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
    & > p {
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.4rem;
      margin: 4.7rem 0;
    }
  `,
  SelectList: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 3rem;
  `,

  Item: styled.div<{ isSelected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.4rem;
    height: 4.7rem;
    font-size: 2rem;
    line-height: 2.4rem;
    border: 1px solid ${theme.colors.main_color};
    border-radius: 30px;
    ${({ isSelected }) =>
      isSelected
        ? css`
            background-color: ${theme.colors.main_color};
            color: ${theme.colors.white};
          `
        : css`
            background-color: ${theme.colors.white};
            color: ${theme.colors.main_color};
          `}
  `,
};
