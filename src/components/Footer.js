import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 50px;
  background-color: #08D9D6;
  padding: 30px;
  text-align: right;
  border-top: dotted 1px black;
`;

const Footer = () => {
    
  return (
    <FooterContainer>
      Copyrightⓒ2023 by 콩룡투유 Corner
    </FooterContainer>
  );
};

export default Footer;