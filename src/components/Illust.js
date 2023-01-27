import React from 'react';
import styled from "styled-components";

const IllustContainer = styled.div`
    height: 300px;
    width: 300px;
    background-color: #EAEAEA;
`
const IllustBoxContainer = styled.div`
    margin: 30px 30px 30px 100px;
    float:left
`
const IllustImage = styled.img`
    display: inline-block;
    height: 300px;
    width: 300px;
`


const Illust = (props) => {

    const data = props.data;

    const showModal = () => {
        props.setModalOpen(false);
        props.setillustId(data._id); //부모가 갖고 있는 스테이트를 셋팅함
        props.setModalOpen(true);
    };

    
    return (
        <div>
            <IllustBoxContainer>
                <IllustContainer onClick={showModal}>
                    <IllustImage src={data.image}/>
                </IllustContainer>
                <h3>{data.name}</h3> 
            </IllustBoxContainer>
            
        </div>
    );
};
export default Illust;