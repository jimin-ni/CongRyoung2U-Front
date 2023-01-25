import React from 'react';
import styled from "styled-components";
import PlaceListItem from '../components/PlaceListItem';
import { useState } from "react";
import Map from "../components/GoogleMap";
import SelectModal from '../components/SelectModal';

const PageContainer = styled.div`
    
`
const PlaceTemplateBlock = styled.div `
  width: 390px;
  height: 910px;
  position: relative;
  top: -1000px;
  z-index: 500;
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
  
  const [places/*, setPlaces*/] = useState([
    { placeName: "장소1", personName: "인물명1" },
    { placeName: "장소2", personName: "인물명2" },
    { placeName: "장소3", personName: "인물명3" },
    { placeName: "장소4", personName: "인물명4" },
    { placeName: "장소5", personName: "인물명5" },
  ])

  const PlaceList = places?.map(() => {
    return <PlaceListItem setModalOpen={setModalOpen} />
  })

  return (
    <PageContainer>
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
        {modalOpen && <SelectModal setModalOpen={setModalOpen} />}
      </MapBlock>
    </PageContainer>
  );
};

export default SelectPage;