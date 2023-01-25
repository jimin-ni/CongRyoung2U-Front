//GamePage.js에 들어갈 배경 컴포넌트

import React, { Component, useState, useEffect, useRef } from 'react'
//import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
// import BackgroundImg from '(게임 배경 png 링크 - 추후 수정)';

//임시 배경 스타일 (게임 배경 png 링크 - 추후 수정)
const useStyles = makeStyles(theme => ({
    root: { },
    background: {
        border: '1px solid black',
        margin: '50px 0 0 50px',
        position: 'absolute'
    },
}))

//배경 움직이기
function Background() {
  // init
    const updateTime = 30 
    const speed = 5
    const interval = useRef()
  // State
    const [offSet, setOffSet] = useState(0)
    useEffect(() => {
        return () => {
            clearInterval(interval.current)
        }
    }, [])
    useEffect(() => {
        draw()
        setBackgroundMovement()
        return () => {
            clearInterval(interval.current)
        }
    }, [offSet])
  // func
    const setBackgroundMovement = () => {
        interval.current = setInterval(() => {
            if (offSet === 1000 - speed) {
                setOffSet(0)
            } else {
                setOffSet(offSet + speed)
            }
            }, updateTime)
        }
    const draw = () => {
        let canvas = document.querySelector('canvas#background')
        let ctx = canvas.getContext('2d')
        let imageObj = new Image()
        imageObj.onload = function () {
          // left
            ctx.drawImage(imageObj, offSet, 0, 1000 - offSet, 500, 0, 0, 1000 - offSet, 500);
          // right
            ctx.drawImage(imageObj, 0, 0, offSet, 500, 1000 - offSet, 0, offSet, 500);
        }
        //imageObj.src = BackgroundImg; (BackgroundImg =게임 배경 png 링크  - 추후 수정)
    }
  // css
    //canvas태그 살리기 위해 css 내용을 아래와 같이 넣음
    const classes = useStyles();
    return (
        <div>
            <canvas width="1000px" height="500px" id="background" className={classes.background}>
            </canvas>
        </div>
    );
}

export default Background