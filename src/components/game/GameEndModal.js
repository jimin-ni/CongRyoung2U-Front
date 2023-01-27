//  게임 클리어시 화면에 띄워지는 페이지
import React, { useEffect } from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from "axios";

//  CSS
const ModalStyles = styled('container')`
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  width: 400px;
  padding: 20px;
  background-color: #252A34;

  z-index: 999;

  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);

  background-color: #252A34;
  color: white;
  border-radius: 30px;
  text-align: center;
`

const ClearText = styled.div`
    padding: 20px;
    font-size: 30px;
    color: white;
    font-weight:bold;
`
const Button = styled.div`
    margin: 20px;
    padding: 20px;
    background-color: #08D9D6;
    color: black;
    font-size: 24px;
    border-radius: 30px;
`

//  Main Code
const GameEndModal = ({ gameEnd, setGameEnd, itemScore, setModalOpen, stageId, illustId, }) => {

  const userId = useSelector((store) => store.userReducer.userId);  // 유저
  const navigate = useNavigate();
  const location = useLocation();
  
  const clear = () => {  // '선택페이지로 이동' 버튼 클릭시
    if (!userId) { // 유저가 없으면 선택 화면으로
      navigate(`/select`);
    }
    const body = {
      userId: userId,
      illustId: illustId,
      count: itemScore
    };
    console.log(body);
    axios.post(`api/game/save`, body).then((response) => {
      console.log(response.data.unlocked)
      if (response.data.unlocked) {  // 일러스트를 획득했으면
        setGameEnd("새 일러스트 해금!");  // 모달 띄우기
        setModalOpen(true);
      } else { // 일러스트를 획득하지 못했다면
        navigate(`/select`);  // 바로 선택페이지로 이동
      }
    })
  }
  const fail = () => {
    navigate(`/select`);
  }
  const retry = () => {
    window.location.replace("/game")
  }
  const confirmLater = () => {
    navigate(`/select`);
  }
  const confirmNow = () => {
    navigate(`/my`);
  }


  const chooseModal = () => {
    switch (gameEnd) {
      case "게임 오버!":
        return (<div>
          <Button onClick={fail}>스테이지 선택으로</Button>
          <Button onClick={retry} stageId={stageId}>재도전</Button>
          </div>);
      case "게임 클리어!":
        return (<Button onClick={clear}>스테이지 선택으로</Button>);
      case "새 일러스트 해금!":
        return (<div>
          <Button onClick={confirmLater}>나중에 확인하기</Button>
          <Button onClick={confirmNow}>지금 확인하기</Button>
          </div>);
      default:
        return <Button />
    }
  }

  return (
    <ModalStyles>
          <ClearText>
            {gameEnd}
          </ClearText>
          {chooseModal()}
    </ModalStyles>
  );
}

export default GameEndModal;