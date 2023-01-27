import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useRef, useEffect } from 'react';

const ModalStyles = styled('container')`
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    width: 1000px;
    height: 600px;
    padding: 100px;

    z-index: 1000;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #252A34;
    color: white;
    border-radius: 40px;
    box-shadow: 2px 2px 2px 2px gray;
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

const PlayButStyle = styled.button`
    position: fixed;
    bottom: 48px;
    background-color: #08D9D6;
    border-radius: 60px;
    width: 350px;
    height: 63px;
    border: 0px;
    
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #EEEEEE;

    :hover {
      color: red;
    }
`

const IllustContainer = styled.img`
    height: 630px;
    width: 630px;
    background-color: #EAEAEA;
    float: left;
    margin: 0px 30px 0px 0px;
`
const Play = styled(Link)`
    text-decoration: none;
`

const ModalBasic = ({setModalOpen, data}) => {

    const closeModal = () => {
    setModalOpen(false);
    };

    
    return (
        <ModalStyles>
            <div>
                <IllustContainer src={require("../image/illust_lock.png")}/>
                <XButStyle onClick={closeModal}>×</XButStyle>
                <div>
                    <h1>미해금</h1>
                    <div>해금되지 않은 일러스트입니다.</div>
                </div>
                <Play to={`/game`} state={{ stageId: data.stageId }}>
                    <PlayButStyle><FaPlay /></PlayButStyle>
                </Play>
            </div>
        </ModalStyles>
    );
}

export default ModalBasic;