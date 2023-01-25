import React from 'react';
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

const ModalStyles = styled.div`
  width: 500px;
  height: 900px;
  padding: 20px;

  z-index: 999;

  position: absolute;
  top: 150px;
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
const PersonImage = styled.div`
  margin: 20px;
  width: 214.285px;
  height: 285.714px;
  background: gray;
`
const PersonName = styled.div`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  position: relative;
  top: -330px;
  left: 230px;
`
const PersonDesc = styled.div`
  padding: 20px;
  width: 230px;
  height: 250px;
  position: relative;
  top: -360px;
  left: 235px;
  letter-spacing: 2px;
  text-align: justify;
`
const Item = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  position: relative;
  top: -270px;
  left: 190px;
`
const PlayButton = styled.div`
  padding: 20px;
  width: 90px;
  height: 15px;
  border-radius: 30px;
  background: #08D9D6;
  position: relative;
  top: -290px;
  left: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`

function ModalBasic({ setModalOpen })
{
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalStyles>
        <button className='close' onClick={closeModal}>
          X
        </button>
        <PlaceName>장소명</PlaceName>
        <PlaceDesc>국보 제31호. 신라의 제27대 임금인 선덕 여왕 때 만들어진 경상북도 경주시에 있는 삼국시대 신라 시기의 천문대. 지금까지 남아 있는 기상 관측소 가운데 동양에서 가장 오래된 것이다.</PlaceDesc>
        <PersonImage>인물사진</PersonImage>
        <PersonName>인물명</PersonName>
        <PersonDesc>CJ그룹 부회장이며, 영화 '기생충'의 총괄 프로듀서로도 활동하며 CJ ENM의 주요 사업과 콘텐츠 제작을 진두지휘하고 있다. 아카데미 영화 박물관의 부의장이기도 한 그녀는 아시아인이라는 정체성을 가진 영화산업 리더이며, 언론과 많은 인터뷰를 통해 큰 영향력을 가지며 22년도 BBC 올해의 여성 100인</PersonDesc>
        <Item>보상: 아이템</Item>
        <PlayButton><FaPlay /></PlayButton>
    </ModalStyles>
  );
}

export default ModalBasic;