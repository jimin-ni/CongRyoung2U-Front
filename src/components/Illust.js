import React from 'react';
import styled from "styled-components";

const IllustContainer = styled.div`
    height: 357px;
    width: 357px;
    background-color: #EAEAEA;
`
const IllustBoxContainer = styled.div`
    margin: 30px 30px 30px 100px;
    float:left
`

const Illust = () => {
    
    return (
        <IllustBoxContainer>
            <IllustContainer>
                <div>일러스트</div>
            </IllustContainer>
            일러스트 이름
        </IllustBoxContainer>
    );
};

export default Illust;