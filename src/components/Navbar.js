import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  height: 100px;
  background-color: #252A34;
  padding: 15px;
  font-size: 20px;
`;

const MenuWrapper = styled.div`
  display: inline-block; 
`

const Text = styled.div`
  display: inline-block;
  color: white;
  margin: 20px;
`
const TextLink = styled(Link)`
  text-decoration: none;
`

const AuthWrapper = styled.div`
  display: inline-block;
  float: right;
`

const NavPage = () => {
    
  return (
    <NavContainer>
      <MenuWrapper>
        <TextLink to={'/'}>
          <Text>메인화면</Text>
        </TextLink>
        <TextLink to={'/select'}>
          <Text>스테이지 선택</Text>
        </TextLink>
        <TextLink to={'/my'}>
          <Text>일러스트 열람</Text>
        </TextLink>
      </MenuWrapper>
      <AuthWrapper>
        <TextLink to={'/'}>
          <Text>로그인</Text>
        </TextLink>
        <TextLink to={'/'}>
          <Text>회원가입</Text>
        </TextLink>
      </AuthWrapper>
      
    </NavContainer>
  );
};

export default NavPage;