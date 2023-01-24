import React from 'react';
import styled from "styled-components";

const ModalStyles = styled('container')`
  width: 500px;
  height: 900px;
  padding: 20px;

  z-index: 999;

  position: absolute;
  top: 150px;
  right: 0%;

  background-color: #252A34;
  color: white;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`

function ModalBasic({ setModalOpen })
{
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalStyles>
      <div className='contianer'>
      <button className='close' onClick={closeModal}>
        X
      </button>
      <p>모달창입니다.</p>
      <div>장소명, 장소설명</div>
      <div>인물사진</div>
      <div>인물명, 인물소개</div>
      <div>보상: 아이템</div>
      <div><button>플레이버튼</button></div>
    </div>
    </ModalStyles>
  );
}

export default ModalBasic;