import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const PageContainer = styled.div`
  background: linear-gradient(purple, #08D9D6);
  display: flex;
  flex-flow: wrap;
`

const LeftContainer=styled.div`
  width: 1000px;  

`

const LogoImage = styled.div`
  margin: 100px 100px 0 200px;
  font-size: 60px;
`

const MainImage = styled.img`
  display: inline-block;
  width: 800px;
  height: 800px;
  margin: 0 100px 100px 200px;
`

const ExplainContainer = styled.div`
  width: 700px;
  margin: 100px 0;
`
const Explain = styled.div`
  width: 500px;
  height: 500px;
  background: #ffffff66;
  padding: 40px;
  margin: 0 0 100px 0;
`

const MapButton = styled(Link)`
  text-decoration: none;
  text-align: center;
  margin: 0 40px;
`;

const ButtonShape = styled.div`
  display: inline-block;
  width: 500px;
  background-color: #FF2E63;
  color: white;
  font-weight: bold;
  font-size: 48px;
  border-radius: 200px;
  padding: 40px 0;
`;

const ButtonIcon = styled.img`
  width: 1em;
  display: inline-block;
`

const MainPage = () => {
    
  return (
    <>
    <Navbar />
    <PageContainer>
      <LeftContainer>
        <LogoImage>GGG</LogoImage>
        <MainImage src={require("../image/main_img.png")} alt={`GGG 대문 이미지`} />
      </LeftContainer>
      
      <ExplainContainer>
        <Explain>
          콩룡이와 함께 세계를 여행해요!
        </Explain>
        <MapButton to={`/select`}>
          <ButtonShape >
            <ButtonIcon src={require("../image/ic_globe.png")} alt={`map`} />
            &nbsp;&nbsp;Let's Globe
          </ButtonShape>
        </MapButton>
       
      </ExplainContainer>
      
    </PageContainer>
    </>
  );
};

export default MainPage;