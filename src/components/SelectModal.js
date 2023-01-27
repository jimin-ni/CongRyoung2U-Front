import React from 'react';
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const ModalStyles = styled.div`
  width: 500px;
  height: 820px;
  padding: 20px;

  z-index: 999;

  position: absolute;
  top: 80px;
  right: 0%;

  background-color: #252A34;
  color: white;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
`
const XButStyle = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    margin: 30px;
    width: 40px;
    height: 40px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    background-color: black;
    color: white;
`


const PlaceContainer = styled.div`
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
  height: 150px;
`
const PersonContainer = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
`
const PersonContent = styled.div`
  width: 200px;
  padding: 20px;

`
const PersonImageBlock = styled.div`
  margin: 20px;
  width: 180px;
  height: 240px;
`
const PersonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const PersonName = styled.div`
  width: 100%;
  padding: 10px 20px;
  font-size: 30px;
  font-weight: bold;
`
const BirthDeath = styled.div`
  width: 100%;
  padding: 0 20px;
  font-size: 16px;
`
const PersonDesc = styled.div`
  width: 230px;
  height: 250px;
  letter-spacing: 2px;
  text-align: justify;
`

const PlayContainer = styled.div`
  text-align: center;
`
const Item = styled.div`
  padding: 20px;
  margin-bottom: 10px;
`
const Play = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin: auto;
`
const PlayButton = styled.div`
  padding: 20px;
  width: 90px;
  height: 15px;
  border-radius: 30px;
  background: #08D9D6;
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
        <XButStyle onClick={closeModal}>×</XButStyle>
        <PlaceContainer>
          <PlaceName>{data.placeName}</PlaceName>
          <PlaceDesc>{data.placeDesc}</PlaceDesc>
        </PlaceContainer>
        <PersonContainer>        
          <PersonName>{data.personName}</PersonName>
          <BirthDeath>({data.personYear})</BirthDeath>
          <PersonImageBlock>
            <PersonImage src={data.personImage} />
          </PersonImageBlock>
          <PersonContent>
            <PersonDesc>{data.personDesc}</PersonDesc>
          </PersonContent>
        </PersonContainer>
        <PlayContainer>
          <Item>보상: {data.itemName}</Item>
          <Play to={`/game`} state={{ stageId: data._id }}>
            <PlayButton><FaPlay /></PlayButton>
          </Play>
        </PlayContainer>
        
    </ModalStyles>
  );
}

export default ModalBasic;