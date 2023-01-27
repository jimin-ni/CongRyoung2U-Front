import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const ModalStyles = styled.div`
  width: 500px;
  height: 900px;
  padding: 20px;

  z-index: 999;

  position: absolute;
  top: 125px;
  right: 0%;

  background-color: #252A34;
  color: white;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
`
const PlaceName = styled.div`
  margin-top: 20px;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
`
const PlaceDesc = styled.div`
  letter-spacing: 2px;
  text-align: justify;
  padding: 20px;
  height: 200px;
`
const PersonImageBlock = styled.div`
  margin: 20px;
  width: 214.285px;
  height: 285.714px;
  position: relative;
  top: 50px;
`
const PersonImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const PersonName = styled.div`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  position: relative;
  top: -335px;
`
const BirthDeath = styled.div`
  font-size: 15px;
  position: relative;
  top: -340px;
  left: 255px;
`
const PersonDesc = styled.div`
  padding: 20px;
  width: 230px;
  height: 250px;
  position: relative;
  top: -350px;
  left: 235px;
  letter-spacing: 2px;
  text-align: justify;
`
const Item = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  position: relative;
  top: -290px;
  left: 5px;
  text-align: center;
  background: black;
`
const Play = styled(Link)`
  text-decoration: none;
`
const PlayButton = styled.div`
  padding: 20px;
  width: 90px;
  height: 15px;
  border-radius: 30px;
  background: #08D9D6;
  position: relative;
  top: -310px;
  left: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`

function ModalBasic({ setModalOpen, data })
{
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalStyles>
        <button className='close' onClick={closeModal}>
          X
        </button>
        <PlaceName>{data.placeName}</PlaceName>
        <PlaceDesc>{data.placeDesc}</PlaceDesc>
        <PersonImageBlock>
          <PersonImage src={data.personImage} />
        </PersonImageBlock>
        <PersonName>{data.personName}</PersonName>
        <BirthDeath>({data.personYear})</BirthDeath>
        <PersonDesc>{data.personDesc}</PersonDesc>
        <Item>보상: {data.itemName}</Item>
        <Play to={`/game`}>
          <PlayButton><FaPlay /></PlayButton>
        </Play>
    </ModalStyles>
  );
}

export default ModalBasic;