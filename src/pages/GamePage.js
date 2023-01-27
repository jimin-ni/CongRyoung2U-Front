import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Game from "../components/game/Game";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import { useLocation } from "react-router-dom";

//css
const PageContainer = styled.div`
    height: 500px;
`
const MapInfo_Top = styled.div`
  height: 130px;
  background-color: #252A34;
  padding: 15px;
  border-radius: 0 0 30px 30px;
  display: flex;
  align-items: center;
`
const MapInfo_Top_Text = styled.div`
  width: 400px;
`
const CategoryInfo = styled.div`
  display: inline-block;
  padding: 10px;
  font-size: 20px;
  color: white;
  align-items: center;
`
const PlaceInfo = styled.div`
  display: inline-block;
  padding-left: 3px;
  font-size: 20px;
  color: white;
  align-items: center;
`
const ItemScoreBox = styled.div` 
  text-decoration: none;
  background-color: #EAEAEA;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: auto;
`
const ItemIMG = styled.img`
  width: 30px;
  height: 30px;
`
const ItemScore = styled.div`
  margin-left: 20px;
  font-size: 32px;
`
const CharacterInfo = styled.div`
  padding: 10px;
  font-size: 35px;
  color: #08D9D6;
  align-items: center;
  display: 'flex';
`
const GameGround = styled.div`
  text-decoration: none;
`
const MapInfo_Bottom_1 = styled.div`
  height: 200px;
  background-color: #252A34;
  display: flex;
`
const MapInfo_Bottom_2 = styled.div`
  height: 130px;
  background-color: #EAEAEA;
  padding: 15px;
  margin-top: 40px;
  position: bottom;
  border-radius: 30px 30px 0 0;
  width: 100%;
`
const IllustItem = styled.div`
  height: 50px;
  padding: 15px;
  position: absolute;  
  color: #FF2E63;
  display: inline-block;
  align-items: center;
  position:relative;
  margin-bottom: 5px;
  font-size: 25px;
`
const IllustText = styled.div`
  height: 50px;
  padding: 15px;
  position: absolute;  
  color: #252A34;
  font-size: 20px;
  position:relative;
  margin-top: -20px;
`
const MapIcon = styled.div`
color: #FF2E63;
display: inline-block;
padding-left: 10px;
padding-right: 1px;
align-items: center;
font-size: 21px;
`


//main code
const GamePage = () => {
  const location = useLocation();
  const stageId = location.state.stageId;
  const [place, setPlace] = useState([]);
  const [itemScore, setItemScore] = useState(0);

  useEffect(() => {
    axios.get(`api/stage/detail/${stageId&&stageId}`).then((response) => {
      console.log(response.data.stage)
      setPlace(response.data.stage)
    })
  },[stageId])

  return (
    <>
    <Navbar />
    
    <MapInfo_Top> {/* 게임 맵 정보-상단 */}
      <MapInfo_Top_Text>
        <CategoryInfo>{place.category}</CategoryInfo>{/*  카테고리 불러오기 */}
        <MapIcon><FaMapMarkerAlt /></MapIcon>
        <PlaceInfo>{place.placeName}</PlaceInfo> {/*  장소명 불러오기 */}
        <CharacterInfo>{place.personName}</CharacterInfo>
      </MapInfo_Top_Text>

      <ItemScoreBox>
        <ItemIMG src={place.itemImage} alt={place.itemName}/> {/*  아이템 이미지 불러오기 */}
        <ItemScore>{itemScore}</ItemScore> {/*  실시간 데이터값 불러오기 */}
      </ItemScoreBox>
    </MapInfo_Top>
  
    <PageContainer> {/* 그저 게임 */}
      <GameGround>
        <Game placeImage={place.placeImage} itemImage={place.itemImage} setItemScore={setItemScore} />
      </GameGround>
    </PageContainer>
    
    <MapInfo_Bottom_1>{/* 게임 맵 정보-하단 */}
      <MapInfo_Bottom_2>
        <IllustItem>
          {place.placeName} {/* 일러스트 제목 데이터 */}
        </IllustItem>
        <IllustText>
          {place.placeDesc}
        </IllustText>
      </MapInfo_Bottom_2>
    </MapInfo_Bottom_1>


    </>
  );
};

export default GamePage;