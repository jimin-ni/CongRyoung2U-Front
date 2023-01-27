import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { logoutUser } from '../redux/action/userAction';

const PageContainer = styled.div`
  background: linear-gradient(#252A34, #252A34, #08D9D6);
  text-align: center;
  display: flex;
  flex-flow: wrap;
  height: 850px;
  
`
const LeftContainer=styled.div`
  width: 1000px;  

`
const RightContainer = styled.div`
  width: 700px;
  margin: 200px 0 0 0;
`
const MainImage = styled.img`
  display: inline-block;
  width: 700px;
  height: 700px;
  margin: 40px 0 0 300px;
`
const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 40px;
  margin: 40px 0;
`

const LogoutButton = styled.button`
  display: inline-block;
  text-align: center;
  width: 200px;
  background-color: #FF2E63;
  color: white;
  font-weight: bold;
  font-size: 24px;
  border-radius: 100px;
  padding: 20px 0;
  border: none;
  :hover {
    background-color: #252A34;
    cursor: pointer;
    }
`;


const Logout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = async () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload) { 
        toast.success(
          <div className="toast">로그아웃되었습니다.</div>,
          {
            position: "top-center",
            autoClose: 2000,
          }
        );
      }
    })
    localStorage.removeItem("userId");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <LeftContainer>
          <MainImage src={require("../image/main_img.png")} alt={`GGG 대문 이미지`} />
        </LeftContainer>
        <RightContainer>
            <Title>From. GGG</Title>
            <LogoutButton type="submit" onClick={onClick}>
              Log Out
            </LogoutButton>
        </RightContainer>
      </PageContainer>
    </>
  );
};

export default Logout;