//  게임 클리어 실패시 화면에 띄워지는 페이지
import React from 'react';
import styled from "styled-components";


//  CSS
const Background = styled.div`
    height: 300px;
    width: 400px;
    background-color: #252A34;
    position: absolute;
    border-radius: 30px 30px 30px 30px;
`
const FailText = styled.div`
    padding: 20px;
    color: white;
    font-weight:bolder;
`


//  Main Code
function ModalClear({ setModalOpen })
{
    const GameFailModal = () => {
        setModalOpen(false);
    };

    return (
        <Background>
            <FailText>
                ! STAGE CLEAR FAIL !
            </FailText>

            <button className='close' onClick={'/select'}>
                확인
            </button>
        </Background>
    );
}

export default ModalClear;