import { useRouter } from 'next/router';
import Logo from 'public/footerLogo.svg';
import { useEffect, useState } from 'react';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

function Footer() {
  const router = useRouter();
  const [isLogin,setIsLogin] = useState(false);

  useEffect(()=>{
  const accessToken = localStorage.getItem('ccst_accessToken');
  const isAccess = accessToken?.length ? true:false;
  setIsLogin(isAccess);
  },[])

  const handleClick = () => {
    if(isLogin){
      localStorage.removeItem('ccst_accessToken');
      localStorage.removeItem('ccst_name');
      location.reload();
    }else{
      router.push('/auth/login');
    }
  }

  return (
    <Styled.Root>
      <Logo />
      <span onClick={handleClick}>{isLogin?'로그아웃':'로그인'}</span>
    </Styled.Root>
  );
}

export default Footer;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.6rem 0;
    background-color: ${theme.colors.footerGrey};
    gap:1.3rem;

    &>span{
      font-size:1.2rem;
      text-decoration: underline;
      color: #C9C9C9;
    }
  `,
};
