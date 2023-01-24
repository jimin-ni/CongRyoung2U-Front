import React from 'react';
import styled from "styled-components";

const PlaceTemplateBlock = styled.div `
  width: 390px;
  height: 910px;
  background: grey;
  z-index: 700;
`;

const PlaceListItemBlock = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  height: 60px;
  background: #252A34;
  position: relative;
  top: 20px;
  border-radius: 40px;
  color: white;
  z-index: 800;
`

function PlaceListItem() {
  return (
    <PlaceTemplateBlock>
      <PlaceListItemBlock>
        <div>아이콘</div>
        <div>장소1</div>
        <div>인물이름</div>
        <div>☆</div>
      </PlaceListItemBlock>
    </PlaceTemplateBlock>
  )
}

export default PlaceListItem;