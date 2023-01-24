import React from 'react';
import styled from "styled-components";
import Illust from '../components/Illust';

const PageContainer = styled.div`
    height: 3000px;
`

const UserInfoContainer = styled.div`
  height: 150px;
  background-color: #252A34;
  padding: 15px 40px;
  color: white;
`

const IconContainer = styled.div`
  float:right
`;


const MyPage = () => {
    
  return (
    <PageContainer>
      <UserInfoContainer>
        <div>
          <h2>아무개</h2>
          <h5>아무개 아이디<br/>해금 일러스트 수</h5>
        </div>
        <IconContainer>
          <img className="logo" alt="logo" src="" />
        </IconContainer>
      </UserInfoContainer>
      마이페이지입니다.
      <br/>
      <Illust/>
      <Illust/>
      <Illust/>
      <Illust/>
      <Illust/>
      <Illust/>
    </PageContainer>
    
  );
};

export default MyPage;