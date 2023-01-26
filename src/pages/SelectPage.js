import React, { useEffect } from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import PlaceListItem from '../components/PlaceListItem';
import { useState } from "react";
import Map from "../components/GoogleMap";
import SelectModal from '../components/SelectModal';
import axios from 'axios';

const PageContainer = styled.div`
    
`
const PlaceTemplateBlock = styled.div `
  width: 420px;
  height: 930px;
  position: relative;
  top: -1000px;
  z-index: 500;
  overflow: scroll;
`
const CategoryBlock = styled.div`
  width: 500px;
  height: 50px;
  padding-left: 15px;
  padding-top: 20px;
  position: relative;
  top: -1000px;
  z-index: 500;
`
const CategoryItem = styled.div`
  width: 80px;
  height: 20px;
  background: #EAEAEA;
  margin: 10px 5px;
  padding: 3px;
  float: left;
  font-size: 12px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px gray;
`

const MapBlock = styled.div`
  z-index: 0;
  height: 990px;
`

const SelectPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [stageId, setStageId] = useState("")
  const [places, setPlaces] = useState([])
  const [place, setPlace] = useState("")

  useEffect(() => {
    axios.get("api/stage/list").then((response) => {
      console.log(response.data.stageList)
      setPlaces(response.data.stageList)
    })
  },[])

  useEffect(() => {
    axios.get(`api/stage/detail/${stageId&&stageId}`).then((response) => {
      console.log(response.data.stage)
      setPlace(response.data.stage)
    })
  },[stageId])

  const PlaceList = places?.map((data, index) => {
    return <PlaceListItem data={data} key={index} setModalOpen={setModalOpen} setStageId={setStageId} />
  })

  return (
    <PageContainer>
      <Navbar />
      <MapBlock>
        <Map />
        <CategoryBlock>
          <CategoryItem><input type="checkbox"></input>과학자</CategoryItem>
          <CategoryItem><input type="checkbox"></input>공학자</CategoryItem>
          <CategoryItem><input type="checkbox"></input>기업인</CategoryItem>
          <CategoryItem><input type="checkbox"></input>정치인</CategoryItem>
          <CategoryItem><input type="checkbox"></input>인권운동가</CategoryItem>
        </CategoryBlock>
        <PlaceTemplateBlock>
          {PlaceList}
        </PlaceTemplateBlock>
        {modalOpen && <SelectModal setModalOpen={setModalOpen} id={stageId} data={place} />}
      </MapBlock>
    </PageContainer>
  );
};

export default SelectPage;