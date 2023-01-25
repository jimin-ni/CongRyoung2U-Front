import React from 'react';
import styled from "styled-components";

const ModalStyles = styled('container')`
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    width: 1000px;
    height: 600px;
    padding: 100px;

    z-index: 1000;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #252A34;
    color: white;
    border-radius: 40px;
`
const XButStyle = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    margin: 30px;
`

const PlayButStyle = styled.button`
    position: fixed;
    bottom: 48px;

    background-color: #08D9D6;
    border-radius: 60px;
    width: 170px;
    height: 63px;
`

const IllustContainer = styled.div`
    height: 630px;
    width: 630px;
    background-color: #EAEAEA;
    float: left;
    margin: 0px 30px 0px 0px;
`

function ModalBasic({ setModalOpen })
{
    const closeModal = () => {
    setModalOpen(false);
    };

    return (
        <ModalStyles>
            <div>
                <IllustContainer>
                    <div>일러스트</div>
                </IllustContainer>
                <XButStyle onClick={closeModal}>X</XButStyle>
                <div>
                    <h1>일러스트 명</h1>
                    <div>일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개일러스트, 인물 소개</div>
                </div>
                <PlayButStyle >플레이버튼</PlayButStyle>
            </div>
        </ModalStyles>
    );
}

export default ModalBasic;