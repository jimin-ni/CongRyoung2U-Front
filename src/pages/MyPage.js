import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Illust from '../components/Illust';
import SelectModal from '../components/IllustModal';
import Navbar from "../components/Navbar";
import axios from "axios";

const PageContainer = styled.div`
    height: 2500px;
`

const UserInfoContainer = styled.div`
  height: 150px;
  background-color: #252A34;
  padding: 15px 100px;
  color: white;
`

const IconContainer = styled.img`
  float:right;
  height: 150px;
  width: 150px;
`;

const IllustTitleContainer = styled.h1`
    margin: 30px 30px 30px 100px;
`


const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [illust, setillust] = useState([]);
  
  const [illustId, setillustId] = useState([]);
  useEffect(() => {
  axios.get(`api/illust/detail/${illustId&&illustId}`).then((response) => {
      console.log(response.data.illust)
      setillust(response.data.illust)
  })
  },[illustId]);

  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("api/illust/list").then((response) => {
      console.log(response.data.illustList)
      setList(response.data.illustList)
    })
  },[])
  //var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const Illustlist = list?.map((data, index) => {
    return <Illust data={data} key={index} setModalOpen={setModalOpen} setillustId={setillustId}/>
  });

  const [info, setInfo] = useState([]);
  useEffect(() => {
    let body = {
      _id: "63d0217df66263242ab095b0"
    }
    axios.post("api/users/info", body).then((response) => {
      console.log(response.data.user)
      setInfo(response.data.user)
    })
  },[]);

  return (
    <PageContainer>
      <Navbar />
      <UserInfoContainer>
        <div style={{float: 'left'}}>
          <h1>{info.name}</h1>
          <h3>{info.email}<br/>해금 일러스트 수</h3>
        </div>
        <IconContainer alt="logo" src={require("../image/main_img_logo.png")}/>
      </UserInfoContainer>
      
      <IllustTitleContainer>
        일러스트 목록
      </IllustTitleContainer>
      {Illustlist}
      {modalOpen && <SelectModal setModalOpen={setModalOpen} data={illust} />}
    </PageContainer>
    
  );
};

export default MyPage;