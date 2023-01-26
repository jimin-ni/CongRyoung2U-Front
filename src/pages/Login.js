import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

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
`
const Form = styled.form`
  margin: 30px;
`
const Input = styled.input`
  padding: 6px;
  font-size: 20px;
`
const LoginButton = styled.button`
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
`;


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onClick = () => {
    alert("E-mail : " + email + "\nPassword : " + password);
    setEmail("");
    setPassword("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <LeftContainer>
          <MainImage src={require("../image/main_img.png")} alt={`GGG 대문 이미지`} />
        </LeftContainer>
        <RightContainer>
            <Title>To. You</Title>
            <Form>
              <Input
                type="email"
                name="email"
                placeholder="이메일"
                id="e-mail"
                value={email}
                onChange={onChangeEmail}
              />
            </Form>
            <Form>
              <Input
                type="password"
                name="password"
                placeholder="비밀번호"
                id="password"
                value={password}
                onChange={onChangePassword}
                onKeyDown={onKeyPress}
              />
            </Form>
            <LoginButton type="submit" onClick={onClick}>
              Log In
            </LoginButton>
        </RightContainer>
      </PageContainer>
    </>
  );
};

export default Login;