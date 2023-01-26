import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//BackGround 스크립트 불러옴
import Background from '../components/Background';

const PageContainer = styled.div`
    height: 700px;
`

//3개는 좌측 정렬, 하나는 우측정렬
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
  padding: 10px;
  font-size: 20px;
  color: white;
  align-items: center;
`

// 우측정렬 해야함
const ItemScoreBox = styled.div` 
  text-decoration: none;
  background-color: #EAEAEA;
  padding: 15px;
  margin: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: auto;

`
const ItemIMG = styled.div`
text-decoration: none;
`
const ItemScore = styled.div`
text-decoration: none;

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
  height: 190px;
  background-color: #252A34;
  padding: 0px;
  display: flex;
  align-items: center;
  position:relative;
`
const MapInfo_Bottom_2 = styled.div`
  height: 130px;
  background-color: #EAEAEA;
  padding: 15px;
  position: bottom;
  border-radius: 30px 30px 0 0;
  width: 700%;

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


const GamePage = () => {
  return (
    <>
    <Navbar />
    
    <MapInfo_Top> {/* 게임 맵 정보-상단 */}
      <MapInfo_Top_Text>
        <CategoryInfo>카테고리</CategoryInfo>{/*  카테고리 불러오기 */}
        <PlaceInfo>장소명</PlaceInfo> {/*  장소명 불러오기 */}
        <CharacterInfo>인물이름</CharacterInfo>
      </MapInfo_Top_Text>

      <ItemScoreBox>
        <ItemIMG>아이템그림</ItemIMG> {/*  아이템 이미지 불러오기 */}
        <ItemScore>20</ItemScore> {/*  실시간 데이터값 불러오기 */}
      </ItemScoreBox>
    </MapInfo_Top>
  
    <PageContainer> {/* 그저 게임 */}
      <GameGround>
        게임 플레이 영역
      </GameGround>
    </PageContainer>
    
    <MapInfo_Bottom_1>{/* 게임 맵 정보-하단 */}
      <MapInfo_Bottom_2>
        <IllustItem>
          획득 예정 아이템: 일러스트 명 {/* 일러스트 제목 데이터 */}
        </IllustItem>
        <IllustText>
          일러스트 설명 및 소개 간략히 2줄 내외~~
        </IllustText>
      </MapInfo_Bottom_2>
    </MapInfo_Bottom_1>


    </>
  );
};

export default GamePage;