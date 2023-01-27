//  게임 클리어시 화면에 띄워지는 페이지
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
const ClearText = styled.div`
    padding: 20px;
    color: white;
    font-weight:bolder;
`

//  Main Code
function ModalClear({ setModalOpen })
{
    const GameClearModal = () => {
        setModalOpen(false);
    };

    return (
        <Background>
            <ClearText>
                ! STAGE CLEAR !
            </ClearText>

             <button className='close' onClick={' '}>   {/* GameIllustOpenModal 으로 연결 */}
                확인
            </button>
        </Background>
    );
}

export default ModalClear;