import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import SelectModal from './SelectModal';
import { FaMapMarkerAlt, FaRegStar } from "react-icons/fa";


const PlaceListItemBlock = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-top: 20px;
  width: 300px;
  height: 60px;
  background: #252A34;
  position: relative;
  top: 20px;
  border-radius: 40px;
  color: white;
  z-index: 700;
`

const IconDiv = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  left: -5px;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #FF2E63;
`;
const PlaceName = styled.div`
  width: 170px;
  height: 30px;
  position: relative;
  left: 55px;
  top: -70px;
  color: #EAEAEA;
`;
const PersonName = styled.div`
  width: 170px;
  height: 30px;
  position: relative;
  left: 55px;
  top: -70px;
  color: white;
  font-size: 18px;
`
const Bookmark = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  left: 225px;
  top: -130px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFC700;
`

function PlaceListItem() {

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <PlaceListItemBlock onClick={showModal}>
        <IconDiv><FaMapMarkerAlt /></IconDiv>
        <PlaceName>장소</PlaceName>
        <PersonName>인물이름</PersonName>
        <Bookmark><FaRegStar /></Bookmark>
      </PlaceListItemBlock>
      {modalOpen && <SelectModal setModalOpen={setModalOpen} />}
    </div>
  )
}

export default PlaceListItem;