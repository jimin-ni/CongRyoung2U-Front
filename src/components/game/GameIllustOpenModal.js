//  게임 클리어 > 확인버튼 > 화면에 띄워지는 일러스트 해금 여부 확인 모달창
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
const CleaerText = styled.div`
    padding: 20px;
    color: white;
    font-weight:bolder;
`


//  Main Code
function ModalClear({ setModalOpen })
{
    const GameIllustOpenModal = () => {
        setModalOpen(false);
    };

    return (
        <Background>
            <CleaerText>
                ! 신규 일러스트가 해금되었습니다 !
            </CleaerText>

            <button className='close' onClick={'/select'}> 
                나중에 볼게요
            </button>
            <button className='open' onClick={'/my'}>       
                지금 볼래요 
            </button>
        </Background>
    );
}

export default ModalClear;