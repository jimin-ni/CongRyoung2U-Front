import React, { useState, useEffect} from 'react';
import styled from "styled-components";

const CharacterImage = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 150px;
`

const Character = (props) => {
  // init
  const updateTime = 20;
  const initTop = 552;
  const jumpHeight = 250;
  const [top, setTop] = useState(initTop);
  const speed = 10;
  const timeOutList = [];
  var isJump = false;
  // 컴포넌트가 mount 되는 경우 key event 등록
  // unmount 되는 경우 모든 timeout을 삭제하고 key event를 삭제
  useEffect(()=>{
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      for (let i=0; i< timeOutList.length; i++){
        clearTimeout(timeOutList[i]);
      }
      document.removeEventListener('keydown', handleKeyDown);
    }
  },[])
  // 스페이스바를 누르는 경우 점프
  const handleKeyDown = (e) => {
    if (e.keyCode === 32) {
      e.preventDefault();
      if (!isJump){
        isJump = !isJump;
        jump();
      }
    }
  }
  // 점프
  const jump = () => {
    for (let i = 0; i < 2*jumpHeight/speed+1; i++) {
      let timeOut = setTimeout(() => {
        if (i < jumpHeight/speed) {
          setTop(initTop - speed*i);
        } else {
          setTop(initTop - speed*(2*jumpHeight/speed-i));
        }
        if (i=== 2*jumpHeight/speed)
        isJump = false;
      }, updateTime * i)
      timeOutList.push(timeOut);
    }

  }
  // 렌더링
  return (
    <div>
      <CharacterImage id="character" src = {props.characterImg} style={{top:top}} />
    </div>
  )
}
export default Character;