import React from 'react';
import styled from "styled-components";
import PlaceListItem from '../components/PlaceListItem';
import { useState } from "react";

const PageContainer = styled.div`
    
`
const PlaceTemplateBlock = styled.div `
  width: 390px;
  height: 910px;
  z-index: 700;
`
const CategoryBlock = styled.div`
  width: 500px;
  height: 50px;
  z-index: 700;
  padding-left: 15px;
  padding-top: 20px;
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
  z-index: 800;
`

const SelectPage = () => {
  
  const [places, setPlaces] = useState([
    { placeName: "장소1", personName: "인물명1" },
    { placeName: "장소2", personName: "인물명2" },
    { placeName: "장소3", personName: "인물명3" },
    { placeName: "장소4", personName: "인물명4" },
    { placeName: "장소5", personName: "인물명5" }
  ])

  const PlaceList = places?.map(() => {
    return <PlaceListItem />
  })

  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default SelectPage;