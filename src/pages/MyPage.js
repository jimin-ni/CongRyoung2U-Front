import React, { useState } from 'react';
import styled from "styled-components";
import Illust from '../components/Illust';
import SelectModal from '../components/IllustModal';
import Navbar from "../components/Navbar";

const PageContainer = styled.div`
    height: 2500px;
`

const UserInfoContainer = styled.div`
  height: 150px;
  background-color: #252A34;
  padding: 15px 100px;
  color: white;
`

const IconContainer = styled.div`
  float:right
`;

const IllustTitleContainer = styled.h1`
    margin: 30px 30px 30px 100px;
`


const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const Illustlist = list.map(function(a){
    return <Illust setModalOpen={setModalOpen} />
  });

  return (
    <PageContainer>
      <Navbar />
      <UserInfoContainer>
        <div style={{float: 'left'}}>
          <h1>아무개</h1>
          <h3>아무개 아이디<br/>해금 일러스트 수</h3>
        </div>
        <IconContainer>
          <img className="logo" alt="logo" src="" />
        </IconContainer>
      </UserInfoContainer>
      
      <IllustTitleContainer>
        일러스트 목록
      </IllustTitleContainer>
      {Illustlist}
      {modalOpen && <SelectModal setModalOpen={setModalOpen} />}
    </PageContainer>
    
  );
};

export default MyPage;