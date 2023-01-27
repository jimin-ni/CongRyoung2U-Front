import React, { useState, useEffect, useRef } from 'react';
import Chracter from './Character';
import Background from './Background';
import Enemy from './Enemy';
import Item from './Item';
import styled from "styled-components";


const ImageCover = styled.div`
  display: inline-block;
	position: relative;
  width: 100%;
  height: 700px;
  text-align: center;
`

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 1000px;
  height: 500px;
  z-index: 0;
`

const StartText = styled.div`
  position: absolute;
  z-index: 10;
  font-size: 30px;
  width: 1000px;
  padding: 200px 0;
  background-color: #ffffff77;
`

const Timer = styled.div`
  font-size: 20px;
  display: flex;
`

const Game = (props) => {
	// Init
	const updateTime = 20;
	const interval = useRef();
	// State
	const [isStart, setIsStart] = useState(false);
	const [time, setTime] = useState(0);
  const [rand, setRand] = useState(0);
	const [result, setResult] = useState(0);
	const [isEnemyMove, setIsEnemyMove] = useState(false);
	const [isItemMove, setIsItemMove] = useState(false);

  const [count, setCount] = useState(0);
	// 특정 시간을 주기로
	// 1. Enemy에게 props로 보내는 state를 true 또는 false로 수정
	// 2. 시간을 체크
	// 3. 충돌을 체크s
	useEffect(() => {
  if (isStart) {
			interval.current = setInterval(() => {
        if (Math.floor(time)%3 == 2){  // 3초마다 장애물과 아이템 등장
					setIsEnemyMove(true);
          setIsItemMove(true);
				} else {
          setIsEnemyMove(false);
          setIsItemMove(false);
        }
				setTime(time + updateTime * 0.001);
        setRand(Math.random()*100);
				checkConflict();
        checkItem();
			}, updateTime)
		}
		return () => {
			clearInterval(interval.current);
		};
	}, [time, isStart]);
	
	// 게임 시작
	const handleClickStartButton = () => {
		setIsStart(true);
	}
	// 장애물과의 충돌 체크하고 충돌이면 게임을 종료
	const checkConflict = () => {
		let enemy = document.querySelector('img#enemy');
		let character = document.querySelector('img#character');
		if (enemy !== null && character !== null) {
			let dis = Math.pow(enemy.x - character.x, 2) + Math.pow(enemy.y - character.y, 2)
			if (dis < 3000) {
				alert("Game Over!");
				if (result<time){
					setResult(time);
				}
				setIsStart(false);
				setTime(0);
			}
		}
	}
  // 아이템과의 충돌 체크하고 충돌이면 점수 올리기
	const checkItem = () => {
		let item = document.querySelector('img#item');
		let character = document.querySelector('img#character');
		if (item !== null && character !== null) {
			let dis = Math.pow(item.x - character.x, 2) + Math.pow(item.y - character.y, 2)
			if (2000 < dis && dis < 3000) {
        setCount(count+1);
        if (count>=10){
					alert(`아이템 ${count}개 획득`);
				}
			}
		}
	}
	// 시작한 경우 게임 컴포넌트를 렌더링
	return (
		<div >
			{
				isStart ?
					<div>
						<Background bgimg={props.placeImage} />
						<Chracter characterImg={require("../../image/main_character.png")} />
						<Enemy isMove={isEnemyMove}/>
            <Item itemImg={props.itemImage} isMove={isItemMove}/> {/* 임시 이미지. props로 전달 예정 */}
						<Timer>
							<div >React Web Game!!</div>
							<div style={{ margin: "0 0 0 50px" }}> Time : {Math.floor(time)}s</div>
              <div style={{ margin: "0 0 0 100px" }}> 아이템 : {count}</div>
						</Timer>
					</div>
					:
					<div>
						<ImageCover onClick={handleClickStartButton}>
              <Img src={props.placeImage} alt={`map`} />
							<StartText>
                Your Highest Record is {Math.floor(result)}s
                <br/>
                Click to Start Game!!
              </StartText>
						</ImageCover>
					</div>
			}
		</div>
	)
}
export default Game;