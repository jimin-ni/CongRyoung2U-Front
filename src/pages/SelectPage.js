import React from 'react';
import styled from "styled-components";
import PlaceListItem from '../components/PlaceListItem';
import SelectModalPage from '../components/SelectModalPage';

const PageContainer = styled.div`
    height: 300px;
`
const CategoryBlock = styled.div`
  width: 550px;
  height: 50px;
  background: black;
  z-index: 700;
`
const CategoryItem = styled.div`
  width: 80px;
  height: 20px;
  background: #EAEAEA;
  margin: 10px 10px;
  padding: 3px;
  float: left;
  font-size: 12px;
  z-index: 800;
`

const SelectPage = () => {
    
  return (
    <PageContainer>
      <CategoryBlock>
        <CategoryItem><input type="checkbox"></input>과학자</CategoryItem>
        <CategoryItem><input type="checkbox"></input>공학자</CategoryItem>
        <CategoryItem><input type="checkbox"></input>기업인</CategoryItem>
        <CategoryItem><input type="checkbox"></input>정치인</CategoryItem>
        <CategoryItem><input type="checkbox"></input>인권운동가</CategoryItem>
      </CategoryBlock>
      <PlaceListItem></PlaceListItem>
      <SelectModalPage></SelectModalPage>
    </PageContainer>
  );
};

export default SelectPage;