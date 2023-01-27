import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Illust from '../components/Illust';
import LockedIllust from '../components/LockedIllust';
import IllustModal from '../components/IllustModal';
import LockedIllustModal from '../components/LockedIllustModal';
import Navbar from "../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";

const PageContainer = styled.div`
    height: 2800px;
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
  const [illust, setillust] = useState([]); //일러스트 상세 정보
  const [illustId, setillustId] = useState([]); //선택한 일러스트 (모달창)
  const [list, setList] = useState([]); //일러스트 전체 목록
  const [info, setInfo] = useState([]); //유저 정보
  const [userIllust, setuserIllust] = useState([]); //유저 일러스트 목록
  const [userItem, setuserItem] = useState([]); //유저 아이템 목록

  const userId = useSelector((store) => store.userReducer.userId);

  useEffect(() => {
  axios.get(`api/illust/detail/${illustId&&illustId}`).then((response) => {
      //console.log(response.data.illust)
      setillust(response.data.illust)
  })
  },[illustId]);

  useEffect(() => {
    axios.get("api/illust/list").then((response1) => {
      //console.log(response1.data.illustList)
      setList(response1.data.illustList)
    })

    let body = {
      _id: userId&&userId
    }
    axios.post("api/users/collection", body).then((response2) => {
      //console.log(response2.data.collection)
      let illustList = response2.data.collection.illustList
      illustList = illustList.map(function(illust){ return illust._id; });
      setuserIllust(illustList)
      let itemList = response2.data.collection.itemList
      itemList = itemList.map(function(item){
        return {itemName: item.illustId.stageId.itemName, count: item.count};
      })
      setuserItem(itemList)

      //console.log(illustList);
      //console.log(itemList);
    },[userId])
  });

  const Illustlist = list?.map((data, index) => {
    return ((userIllust).includes(data._id)) ? (
      <Illust data={data} key={index} setModalOpen={setModalOpen} setillustId={setillustId}/>
    ) : (
      <LockedIllust data={data} key={index} setModalOpen={setModalOpen} setillustId={setillustId}/>
    )
  });

  useEffect(() => {
    let body = {
      _id: userId&&userId
    }
    axios.post("api/users/info", body).then((response) => {
      //console.log(response.data.user)
      setInfo(response.data.user)
    })
  },[userId]);


  return (
    <PageContainer>
      <Navbar />
      <UserInfoContainer>
        <div style={{float: 'left'}}>
          <h1>{info.name}</h1>
          <h3>{info.email}<br/>해금 일러스트 수 : n / 14</h3>
        </div>
        <IconContainer alt="logo" src={require("../image/main_img_logo.png")}/>
      </UserInfoContainer>
      
      <IllustTitleContainer>
        일러스트 목록
      </IllustTitleContainer>
      {Illustlist}
      {(modalOpen) && <IllustModal setModalOpen={setModalOpen} data={illust}/>}
    </PageContainer>
    
  );
};

export default MyPage;