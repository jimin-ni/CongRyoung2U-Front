import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

//BackGround 스크립트 불러옴
import Background from '../components/Background';

const PageContainer = styled.div`
    height: 500px;
`
const GamePage = () => {
    
  return (
	// 시작한 경우 게임 컴포넌트를 렌더링 - 타 파일의 main.js참조
    <PageContainer>
      게임페이지입니다...... 나만 뭐 안 떠...
    </PageContainer>
  );
};

export default GamePage;